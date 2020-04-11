import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { MdSearch, MdKeyboard, MdMic } from "react-icons/md";
import { Container } from './styles';




export default function Body() {

 

  const[pesquisa, setPesquisa] = useState('');
  const[go, setGo] = useState(false);
  
  const handleSearch = () =>{
    if(pesquisa!='') setGo(true);
    
  }

  
  
  if(pesquisa != '' && go == true){

    
    return <Redirect to={`/search/${pesquisa}`} />

  }
  




  //handleSearch('aaaa')

  return (
    
    <Container>
      
        <div id='conteudo'>
          <img id='logo' src="https://svgshare.com/i/Jxu.svg" />
          <div id='input'>

            <MdSearch id='lupa' />

            
              <input
               id='pesquisa'
               value={pesquisa}
               onChange={e => setPesquisa(e.target.value)}
               
               />  

               
              <MdKeyboard id='teclado' />    
              <MdMic id='mic'/>  
            
          </div>
          <div id='botoes'>
            <button type='submit' onClick={handleSearch}>Search Chapters</button>
            <button>I'm Feeling Luck</button>
          </div>    
          <a href='' id='casa'>Look for when a character appears in the manga</a>
          <div id='disponivel'>
            <p >Google offered in:</p>
            <a href=''><p id='idioma'> English</p></a>
          </div>
        </div>


    </Container>
  );
}
