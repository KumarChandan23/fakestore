import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import style from "./SingleProduct.module.css";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const SingleProduct = () => {
  const [product, setProduct] = useState([])
  const { id } = useParams()
  const getProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.in/api/products/${id}`);
    setProduct(response.data.product)
  }
  const handleOrder = ()=>{
    toast.error("Product is not available now.")
  }
  useEffect(() => {
    getProduct();
  }, [])
  const productPrice = product.price ? product.price.toLocaleString("en-US", { style: "currency", currency: "USD" }) : "";
  return (
    <main className={style.product_container}>
      <section>
        <img src={product.image} className={style.product_iamge} alt="" />
      </section>
      <section className={style.product_information}>
        <p>Brand: {product.brand}</p>
        <h1> {product.title}</h1>
        <div>
          <span className={style.product_model}>Model: {product.model} </span>
          <span className={style.product_category}>Category: {product.category}</span>
        </div>
        <p className={style.product_price_container}>
          price: <span className={style.product_price}>{productPrice} </span>
          (<span className={style.product_discount}>{product.discount} % Off</span>)
        </p>
        <p className={style.product_description}>Description: {product.description}</p>
        <button onClick={handleOrder} className={style.poruct_order_button}>Order Now</button>
      <ToastContainer position="top-right" autoClose={3000} />

      </section>


    </main>
  )
}

export default SingleProduct