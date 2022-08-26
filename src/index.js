import {initPage} from './intial-loading-page';
import {clearContent} from './clearContent';
import {contactPage } from './contact';
import{menuDisplay} from'./menu';
initPage();
const buttons=document.querySelector('div.selectBtns');
const MainPage=document.createElement('button');
MainPage.classList.add('mainPage');
MainPage.textContent='main page';
buttons.appendChild(MainPage);
const contacts=document.createElement('button');
contacts.classList.add('contacts');
contacts.textContent='contacts';
buttons.appendChild(contacts);
const Menu=document.createElement('button');
Menu.classList.add('Menu');
Menu.textContent='Menu';
buttons.appendChild(Menu);


const buttonList=document.querySelectorAll('button');

buttonList.forEach(button=>button.addEventListener('click',()=>sortPressedButton(button.className)));


function sortPressedButton(value)
{
    clearContent();

    switch(value){

        case 'mainPage':
        initPage();

        break;

        case 'contacts':
            contactPage();

        break;

        case 'Menu':
            menuDisplay();
        break;
    }

}