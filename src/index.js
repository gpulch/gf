// Import des composants nécessaire
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Fetch from './content/API/fetch_api.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Fetch/>
  </React.Fragment>
);

reportWebVitals();
