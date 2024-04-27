function Greeting (props) {
  console.log('props', props)

  return (
    <div>
      <h2>Hi {props.firstName}, welcome to {props.city}!</h2>
    </div>
  ) 
}

export default Greeting;