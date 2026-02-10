
var footerElement = document.createElement('footer');
document.body.appendChild(footerElement);
// Copyright Text in Footer
var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector('footer');
var copyright = document.createElement('p');
copyright.innerHTML = ` Arturo Castilleja ${thisYear} &copy;`;

footer.appendChild(copyright);

document.body.appendChild(footer);


// const myName = document.createElement('p');
// myName.textContent = 'Arturo Castilleja';
// footerElement.appendChild(myName);