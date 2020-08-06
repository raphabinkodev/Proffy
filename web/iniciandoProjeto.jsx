// Para iniciarmos um projeto em React, podemos fazer com o yarn da seguinte maneira:

// 01 - yarn create react-app proffy --template typescript

/* Isso nos irá criar uma estrutura de pastas para nosso projeto react.

- Para podermos rodar nosso projeto react, podemos dar um : yarn start na pasta raiz do nosso projeto

*/

// Arrumar estruturação de pastas:

/* Podemos apagar alguns arquivos como:

1 - Readme.md
2 - Os arquivos CSS, que serão feitos posteriormente
3 - Podemos apagar a logo.svg
4 - Podemos apagar o Arquivo app.test.tsx
5 - Podemos apagar o serviceWorker, que serve para Apps Progressivos
6 - Podemos apagar o setupTeste

Provavelmente dara um erro, então no index.tsx iremos apagar a linha

import * as serviceWorker from './serviceWorker';
import './index.css';

E no arquivo App.tsx

import logo from './logo.svg';
import './App.css';

E na pasta public deixaremos apenas o arquivo index.html

*/

//Entendendo os arquivos

/* 
.gitignore = são algumas configurações que removem alguns arquivos para mandarmos para o git
package.json = presente em todos os projetos que usarmos JavaScript, contendo informações de nosso projeto como dependências
                e etc.
tsconfig.json = são configurações do nosso arquivo typecripit
yarn.lock = nos mostra a versão de cada dependência utilizada no projeto
*/

//Na nossa pasta public ela terá apenas o arquivo index.html e o favicon, que é o icone da página!


/* O React é uma biblioteca estritamente Frontend, ou seja, vai rodar no lado do navegador!


/* Outro detalhe importante, é que para podermos navegar entre páginas dentro de arquivos TSX, devemos
instalar nosso react-router-dom, que irá nos auxiliar nisso, para isso:

yarn add react-router-dom
yarn add @types/react-router-dom -D
*/