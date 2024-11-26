import Header from './components/header.jsx';
import Welcome from './components/welcome.jsx';
import Footer from './components/footer.jsx';
import './App.css';

function App() {
  return (
    <body className='bg-base-300'>
      <Header />
      <main>
        <Welcome />
      </main>
      <Footer />
    </body>
  );
}

export default App;
