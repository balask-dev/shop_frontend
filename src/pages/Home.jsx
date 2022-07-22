import React from "react";
 import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

function Home () {
  return (
    <div>
       <Navbar />
      <Slider />
      <Categories />
      <div style={{marginLeft:"20px",fontSize:"30px",fontFamily: "'Kanit', sans-serif" }}>New Arrivals</div>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
