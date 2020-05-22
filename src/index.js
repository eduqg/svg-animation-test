import React from 'react';
import ReactDOM from 'react-dom'

import App from './App';

// Ocorrerá erro com essa linha, instalar yarn add node-sass -D  
import './styles.scss';

ReactDOM.render(<App />, document.getElementById('root'))