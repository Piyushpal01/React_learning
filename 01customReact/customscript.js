// creating a custom render function to render html els .
function customRender(reactElement, container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children

    for (const prop in reactElement.props) {
            if(prop === 'children') continue;
            domElement.setAttribute(prop, reactElement.props[prop])            
        }
        container.appendChild(domElement)
}

// element in object type.
const reactElement = {
    type: 'a',
    props:{
        href:'https://youtube.com',
        target:'_blank',
    },
    children:'Click to open YouTube Website !'
}

// get the root container element 
const mainContainer=document.getElementById('root');

// passing it to Render function
customRender(reactElement, mainContainer)