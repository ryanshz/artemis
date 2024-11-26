import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/header.jsx';
import Welcome from './components/welcome.jsx';
import Footer from './components/footer.jsx';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/`)
      .then(res => setData(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <body className='bg-base-300'>
      <Header />
      <main>
        <Welcome />
        <h1>{data}</h1>
      </main>
      <Footer />
    </body>
  );
}

export default App;
