import React from "react";
import PIMG from "../Images/nokia.png";
import "./home.css";
function Home(props) {

  // console.log('Home',props.data)

  return (
    <>
      <div className="main-div">
        <div className="Img-Wrapper">
          <img src={PIMG} alt="product img" />
        </div>
        <div className="text-Wrapper">
          <span>Nokia 130</span>
          <span>
            Price:<b>$100:00</b>
          </span>
        </div>
        <div className="btn-wrapper">
          <button className="btn btn-primary" onClick={()=>props.addToCartHandler({price:1000,name:'I-phone 11'})}>Add to cart</button>
        </div>
      </div>
    </>
  );
}
export default Home;
