import React from 'react'
import AllProducts from '../products/all_products/AllProducts';

const Home = () => {
  const userEmail = sessionStorage.getItem("email");
  
  console.log(userEmail)
  return (
    <div>
      <AllProducts />
    </div>
  )
}

export default Home