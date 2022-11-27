import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppRoute from './Routing/AppRoute';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <>
          <div className='container bg-light'>
            <h1 className='text-primary'>This Is React App</h1>
            <BrowserRouter><AppRoute/></BrowserRouter>
            
          </div>
         </>
);


