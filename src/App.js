import React,{Fragment} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Ordercard from "./components/Card/Ordercard";
function App() {
  return (
    <Fragment>
      <Ordercard/>
    <Header/>
    <main>
      <Meals/>
    </main>
    </Fragment>
  )
}

export default App;
