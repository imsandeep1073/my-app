import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Header from './elements/Header';
import Footer from './elements/Footer';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
  </React.StrictMode>
);

reportWebVitals();
