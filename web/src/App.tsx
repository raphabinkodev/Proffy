import React from 'react';

import Routes from './routes';

import './assets/styles/global.css';

//Isso é um componente do react, ou seja, uma função que nos retorna um HTML.

//Sempre que formos criar um componente no nosso projeto, o nome do componente sempre deve começar com letra Maiúscula
//Sempre que formos utilizar a sintaxe HTML, devemos importar o react para dentro do nosso código:
  /* import React from 'react';*/
// JSX nada mais é que JavaScript + XML

function App() {
  return (
    <Routes />
  );
}

export default App;
