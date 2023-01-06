import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Ordercard from "./components/Card/Ordercard";
import Cardprovider from "./components/Store/Cardprovider";
function App() {
  const [cartshown,setshown]=useState(false)
   const showCardHandler=()=>{
    setshown(true)
   }
   const hideCardHandler=()=>{
    setshown(false)
   }

  return (
    <Cardprovider>
     {cartshown && <Ordercard onCloseHandler={hideCardHandler}/>} 
    <Header onShow={showCardHandler}/>
    <main>
      <Meals/>
    </main>
    </Cardprovider>
  )
}

export default App;
