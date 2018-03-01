const elementId = document.getElementById("gallery");
console.log(elementId);

const search = (elementId) => {
  //Arreglo con todos los elementos img de gallery
  const elementsObj = gallery.getElementsByTagName('img');
  console.log(elementsObj);
  console.log(typeof(elementsObj));

  let elements = Array.from(elementsObj);
  console.log(elements);
  console.log(typeof(elements));
  console.log(elements[0].alt);

  const change = (index, elements) => {
    console.log(elements);
    console.log(index);
    let contFig = document.createElement('figure');
    contFig.setAttribute('id', 'cont');
    contFig.appendChild(index);
    elementId.appendChild(contFig);
    let textFig = document.createElement('figcaption');
    let atrObj = index.alt;
    console.log(atrObj);
    textFig.innerText = atrObj;
    contFig.appendChild(textFig);
  };

  let newElementId = elements.map(change);
  console.log(elementId);
};

search(elementId);
