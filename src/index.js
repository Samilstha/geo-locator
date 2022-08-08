import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'rsuite/dist/styles/rsuite-dark.css';
import { GameProvider } from "./providers/GameProvider"
import { AuthProvider } from "./providers/Auth";
ReactDOM.render(
  // <React.StrictMode>
    <AuthProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </AuthProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
