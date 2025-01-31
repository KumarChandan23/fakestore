import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./AllProducts.module.css";
import { useNavigate } from 'react-router-dom';
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const navigator = useNavigate();

  const fetchProducts = async ()=>{
    const {data} = await axios.get("https://fakestoreapi.in/api/products");
    setProducts(data.products)
  }
  const handleSingleProduct = (id)=>{
      navigator(`/product/${id}`)
  }
  useEffect(()=>{
    fetchProducts();
  },[])
  return (
    <div>
        <section className={style.product_container}>
        {
          products.map((item)=>(
            <div key={item.id} className={style.product_card} onClick={()=> handleSingleProduct(item.id)}>
              <img src={item.image} className={style.product_card_image} alt="" />
              <h3>{item.title.length > 10 ? item.title.slice(0, 60) + "...": item.title}</h3>
            </div>
          ))
        }    </section>
    </div>
  )
}

export default AllProducts