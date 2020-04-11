import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Principal from './pages/index.js';
import Pesquisa from './pages/pesquisa.js';

export default function Routes() {

    return (
      
      <BrowserRouter>
        <Route exact path='/' component={Principal} />
        <Route path='/search/:pesquisa' component={Pesquisa} />
      </BrowserRouter>


    );
  }
  

