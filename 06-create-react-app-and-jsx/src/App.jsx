import './App.css'
import Image from './Image.jsx';
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import Article from './Article.jsx';

// Import images from public/ folder - URL starts with /
import dog1 from '/dog1.png';

// Import images from src/assets/ folder - URL starts with ./assets
import dog2 from './assets/dog2.png';

function App() {
  return (
    <>
      <Navbar />

      <img src={dog1} />
      <img src={dog2} />

      <main>
        <Header />
        <Article />
      </main>
    </>
  )
}

export default App
