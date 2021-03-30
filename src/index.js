import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About.js'
import reportWebVitals from './reportWebVitals';
import Skills from './components/skills'
import reactDom from 'react-dom';
import Work from './components/Work';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
  <About />
</React.StrictMode>,
document.getElementById('about')
);
ReactDOM.render(
<React.StrictMode>
  <Skills />
</React.StrictMode>,
document.getElementById('skills')
);
ReactDOM.render(
<React.StrictMode>
  <Work />
</React.StrictMode>,
document.getElementById('work')
);
ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
