import React from 'react'
import ButtonIcon from '../Card/ButtonIcon'
import styles from "./HeaderButton.module.css"
function HeaderButton(props) {
  return (
    <React.Fragment>
     <button className={styles.button}>
      <span className={styles.icon}>
        <ButtonIcon/>
      </span>
     
      <span>Add card</span>
 
     <span className={styles.badge}>3</span>

     </button>


    </React.Fragment>
  )
}

export default HeaderButton