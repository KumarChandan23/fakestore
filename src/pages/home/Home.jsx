import React from 'react'

const Home = () => {
  const userEmail = sessionStorage.getItem("email");
  
  console.log(userEmail)
  return (
    <div>
      <h1>This is Home</h1>
    </div>
  )
}

export default Home