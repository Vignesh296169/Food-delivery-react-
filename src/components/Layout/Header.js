import React from 'react'
import styles from "./Header.module.css"
import img from "../../assest/food.jpg";
function Header() {
  return (
    <React.Fragment>
     <header className={styles.header}>
        <h1>Sepcial Meals</h1>
        <button>card</button>
     </header>
  <div className={styles['main-image']}>
   <img src={img} alt="introimage!" />
  </div>


    </React.Fragment>
  )
}

export default Header