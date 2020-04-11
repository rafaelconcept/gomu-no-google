import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';


export default function Pesquisa({ match }) {
    const [mangas, setMangas] = useState([]);
    const [carregou, setCarregou] = useState(false);

    useEffect(()=>{
      
      async function carregar(pagina){
        
        const response = await api.get('/');
        //console.log(response.data.items[1])
        //console.log(match.params.pesquisa)
        setMangas(response.data.items);
      
        setCarregou(true);
        console.log('entrou');
      }

      if(carregou==false){
        carregar(1);
      }
      
    
    });
  //console.log(mangas.filter(manga => manga.characters.includes('Luffy')))
  //console.log(match.params.pesquisa);
  return (
  
   mangas.filter(manga => manga.characters.includes(match.params.pesquisa)).map(filtrado => (
    
     
      <h1 key={filtrado.id}>Titulo {filtrado.chapter}</h1>
     //   <h1>ok</h1>
   
    
      ))
    
  );
}
