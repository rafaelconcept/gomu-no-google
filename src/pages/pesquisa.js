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
  <div Style='

    border-right: 1px solid #003e3e3e;
    border-left: 1px solid #003e3e3e;
    margin-left: 20px;
    margin-top: 40px;
    width: 600px;
    flex-wrap: wrap;
    display: flex;
    padding-right: 30px;
    padding-left: 15px;

   
    '
    
    >
    
   
   {mangas.filter(manga => manga.characters.includes(match.params.pesquisa)).map(filtrado => (
    
     
      <div key={filtrado.id} Style='
        display:flex;
        flex-direction: column;
        width: 120px;
        align-items: center; 
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #003e3e3e;
        border-radius: 10px;
        padding: 5px;
      '>
      <p Style='text-align:center;'>Chapter {filtrado.id}</p>  
      <img src={filtrado.cover_images[0]} Style='
        width: 100%;
        border-radius: 10px;
      ' />


    
    <a href={`https://manganelo.com/chapter/read_one_piece_manga_online_free4/chapter_${filtrado.id}`}>
      <button
      Style='
        width: 60px;
        height: 20px;
        margin-top: 5px;
        border-radius: 10px;
        cursor: pointer;
        background: #0b034b;
        color: white;
      '
      >Read</button>
   </a>

      </div>
   
   
      ))}

   
  </div>
    
    
  )
   }
