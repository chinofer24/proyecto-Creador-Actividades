/** si queremos exportar debemos colocar la palabra "export"
 * Las cosas que no esten exportadas solo van a funcionar en este archivo
*/

import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre)=>{

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1'); // crea la etiqueta h1
    h1.innerText = `Hola, ${nombre}`; //coloca el texto en la etiqueta

    document.body.append(h1); // agrega la etiqueta h1 en el body


    // img
    // console.log(webpacklogo);
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);
};


