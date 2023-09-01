  import React from 'react';
  import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom'
  import './index.css';
  import App from './App';
  import axios from 'axios';
  import Cookies from "cookies-js";

  import reportWebVitals from './reportWebVitals';
  import { DndProvider } from 'react-dnd';
  import { HTML5Backend } from 'react-dnd-html5-backend';
  import './index.css'; // Import your CSS file

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>,
  );

  reportWebVitals();
