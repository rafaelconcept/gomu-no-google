import React from 'react';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
        <div id='todo'>
            
            <div className='barra cima'>
                <p id='pais'>Brasil</p>
            </div>
            <div className='barra baixo'>
                <div>
                    <a href="">Publicidade</a>
                    <a href="">Negocios</a>
                    <a href="">Sobre</a>
                    <a href="">Como funciona a Pesquisa</a>
                </div>
                <div>
                    <a href="">Privacidade</a>
                    <a href="">Termos</a>
                    <a href="" id='config'>Configurações</a>
                </div>
            </div>

        </div>
    </Container>
  );
}
