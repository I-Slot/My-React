import React from "react";
import ReactDOM from "react-dom";
// import logo from "./logo-react-icon.png";
import HeaderComponent from "./HeaderComponent.js"
import MainContent from "./MainContent.js";
import Footer from "./Footer"
import "./index.css"




function Page(){
  return (
    <div>
      <HeaderComponent />
      <MainContent/>
      <Footer />
    </div>
  );
}



ReactDOM.render(<Page />, document.getElementById("root"));
