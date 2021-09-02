import React from 'react';

import TopBar from './components/topBar/index.jsx';
import MidBar from './components/midBar/index.jsx';
import Header from './components/header/index.jsx';

import Tenis from './images/tenis.svg';
import Tenis1 from './images/tenis-1.svg';
import Tenis2 from './images/tenis-2.svg';
import Tenis3 from './images/tenis-3.svg';
import Tenis4 from './images/tenis-4.svg';
import Tenis5 from './images/tenis-5.svg';
import Tenis6 from './images/tenis-6.svg';
import Tenis7 from './images/tenis-7.svg';

import './App.css';

export default (props) => {
  return (
    <div className='container-app'>
      <TopBar />
      <MidBar />
      <Header />
      <div className='content-app'>
        <div className='context-app'>
          <h1 className='title-app'>Destaques</h1>
          <span className='text-app'>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </span>
        </div>
        <ul className='ul-app'>
          <a href='' className='a'><li className='li-app'><img src={Tenis}/></li></a>
          <a href='' className='a'><li className='li-app'><img src={Tenis1}/></li></a>
          <a href='' className='a'><li className='li-app'><img src={Tenis2}/></li></a>
          <a href='' className='a'><li className='li-app'><img src={Tenis3}/></li></a>
        </ul>
        <ul className='ul-app'>
          <a href='' className='a'><li className='li-app'><img src={Tenis4}/></li></a>
          <a href='' className='a'><li className='li-app'><img src={Tenis5}/></li></a>
          <a href='' className='a'><li className='li-app'><img src={Tenis6}/></li></a>
          <a href='' className='a'><li className='li-app'><img src={Tenis7}/></li></a>
        </ul>
      </div>
    </div>
  )
}
