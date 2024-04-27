import './App.css'
// Import a component
import Image from './Image.jsx';
// Importing mulitple items from one module
import { getRandomNumber, capitalize } from './utils.js';

const name = "uros";
const user = {
  firstName: "Bob",
  photo: "https://i.imgur.com/iFe8f8v.jpg"
}

function App() {
  return (
    <>
      <div className="App">
        <h1> Create React App and JSX</h1>
        { getRandomNumber() }
        
        <br />
        <hr />
        { capitalize('ironhacker') }
        
        <br />
        <h2>{ name }</h2>
        
        <br />
        <h2>{ capitalize(name) }</h2>
        
        <br />
        { user.firstName }
        <img src={user.photo} />

        <Image />
        <Image />
        <Image />
      </div>
    </>
  )
}

export default App
