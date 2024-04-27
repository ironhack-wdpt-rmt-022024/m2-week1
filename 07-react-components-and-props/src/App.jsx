import './App.css'
import Navbar from './Navbar.jsx';
import Greeting from './Greeting.jsx';
import Profile from './Profile.jsx';
import ReactPlayer from 'react-player';

function App() {
  return (
    <>
      <Navbar />

      <ReactPlayer 
        url="https://vimeo.com/channels/top/22439234"
        playing
      />
      <ReactPlayer 
        url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
        playing={true}
        controls={true}
      />

      <Greeting firstName="Laura" city="Barcelona" />
      <Greeting firstName="Mimmy" city="Madrid" />
      <Greeting firstName="Michael" city="Paris" />
      
      <Profile user={ { fName: "Bob", lName: "Ross", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm0yY3lqc2JqdmkwZHZ1ZjY5OXRla2NlYzduMGR0ZG40dTlqbmlhcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d31vTpVi1LAcDvdm/giphy.gif" } } />
    </>
  )
}

export default App
