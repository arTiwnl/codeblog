import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css'; //Importar o CSS

import { Header } from './header';
import { Body } from './body';
import { Footer } from './footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer/>

  </React.StrictMode>,
)
