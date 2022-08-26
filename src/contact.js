export function contactPage()

{
    const content=document.querySelector('div#content');
    const firstContact=document.createElement('p');
    firstContact.classList.add('firstContact');
    firstContact.textContent='head chief: diavolo...........444-444-4444';
    content.appendChild(firstContact);
    const secondContact=document.createElement('p');
    secondContact.classList.add('secondContact');
    secondContact.textContent='second chief: Doppio...........444-444-4444';
    content.appendChild(secondContact);
}