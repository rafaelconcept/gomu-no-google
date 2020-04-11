import React from 'react';
import Menu from '../../assets/apps-24px.svg';
import { Container } from './styles';
import {MdApps} from 'react-icons/md';

export default function Header() {
  return (
    <Container>
      <div>
        <a href='' className='text'>Gmail</a>
        <a href='' className='text'>Imagens</a>
      </div>
      <MdApps id='menu' title='Google Apps' />
      <img id='perfil' title='Conta do google fado iu ifasf' alt='imagem' src="https://api.adorable.io/avatars/244/abott@adorable.png" />

    </Container>
  );
}
