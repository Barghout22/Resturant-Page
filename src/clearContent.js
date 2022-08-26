
export function clearContent(){
    const content=document.querySelector('div#content');
    while((content.firstChild))
    {

        content.removeChild(content.lastChild);
    }


}