import React from 'react';



export default function Pesquisa({ match }) {
    console.log(match)
  return (
  <h1>Resultados para {match.params.pesquisa} </h1>
  );
}
