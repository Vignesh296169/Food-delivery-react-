import React from 'react'
import styles from "./MealForm.module.css"
import Input from '../../UI/Input'

function MealForm(props) {
  return (
    <form className={styles.form}>
        {/* here ui input */}
    <Input label="Amount" input={{
      id:"amount_" + props.id,
      type:"number",
      min:"0",
      max:"5",
      step:"1",
      defaultValue:"0"
    }}/>

   
    <button >+ Add</button>




    </form>
  )
}

export default MealForm