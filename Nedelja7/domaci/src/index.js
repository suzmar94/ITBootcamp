import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import Card from './components/Card';


const App = () =>{

  let string = 'BUTTON';
  let url = 'https://is1-ssl.mzstatic.com/image/thumb/Purple3/v4/34/44/76/344476a3-ec9e-2165-ed79-486b83a630bb/mzl.vohnzxwd.png/246x0w.png';
  let description = 'whatsapp sticker';

  return (
    <>
      <h1>Form:</h1>
      <Form string = {string}/>

      <h1>Card:</h1>
      <Card url = {url} description = {description}/>
    </>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

