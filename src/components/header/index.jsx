import React from 'react';

import './index.css';

import header_image from '../../images/header-image.svg';

export default function Header(props) {
    return(
        <div className='container-header' background={header_image}>
            <div className='image-header'>
                <img src={header_image} />
            </div>
            <h1 className='title-header'>A melhor loja de Jordan</h1>
            <p className='text-header'>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
        </div>
    );
}
