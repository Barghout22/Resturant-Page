export function menuDisplay()
{
    const content=document.querySelector('div#content');
    const image=document.createElement('img');
    image.classList.add('introImage');
    image.src='../src/deadBruno.jpg';
    content.appendChild(image);

    const menuItem=document.createElement('p');
    menuItem.classList.add('menuItem');
    menuItem.textContent='main dish:dead bruno.........20$';
    content.appendChild(menuItem);

}