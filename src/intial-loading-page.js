
function initPage()
{
    const container=document.querySelector('div#content');
    const header=document.createElement('h1');
    header.classList.add('header');
    header.textContent='King crimson donuts';
    container.appendChild(header);
    const image=document.createElement('img');
    image.classList.add('introImage');
    image.src='../src/brunoo.jpg';
    container.appendChild(image);

    const intro=document.createElement('p');
    intro.classList.add('introParagraph');
    intro.textContent='our donuts are always freshly made out of our recently treacherous subordinates!';
    container.appendChild(intro);

}

export { initPage };

