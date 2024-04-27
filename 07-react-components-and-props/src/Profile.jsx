function Profile (props) {
  console.log('props', props)

  return (
    <div>
      <p>First Name: { props.user.fName }  </p>
      <p>Last Name: {props.user.lName } </p>
      <img src={ props.user.img } alt="" />
    </div>
  )
}

export default Profile;