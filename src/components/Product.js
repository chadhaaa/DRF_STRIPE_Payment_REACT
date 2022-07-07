import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [prod, setProd] = useState({
    name: "",
    Product_img: "",
    price: "",
  });

  const { product_id } = useParams();

  const API_URL = "http://localhost:8000";

  useEffect(() => {
    getProduct();
  }, [product_id]);

  const getProduct = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/product/${product_id}/`
    );
    const data = await response.json();
    setProd(data);
  };
  console.log(prod);
  return (
    <div className="container">
      <div className="card">
        <img src={prod?.product_image} alt="" className="p_img" />
        <div>
          <h3>{prod?.name}</h3>
          <p>${prod?.price}</p>
        </div>
        <form
          action={`${API_URL}/api/create-checkout-session/${prod.id}/`}
          method="POST"
        >
          <button type="submit" className="btn">
            Checkout
          </button>
        </form>
        {/* <button onClick={handleCheckout} className="btn"> Checkout</button> */}
      </div>
    </div>
  );
};

export default Product;
