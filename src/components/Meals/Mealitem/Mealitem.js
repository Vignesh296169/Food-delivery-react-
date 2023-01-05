import React from 'react'
import Styles from "./Mealitem.module.css"
import MealForm from './MealForm'
function Mealitem(props) {
  return (
       <li className={Styles.meal} >
        <div><h3> {props.title}</h3>
          <div className={Styles.description}>{props.des}</div>
          <div className={Styles.price}>₹ {props.price}</div>
        </div>
        {/* here form content user adding        */}
        <div>
          <MealForm/>
        </div>
      
       </li>
  )
}

export default Mealitem