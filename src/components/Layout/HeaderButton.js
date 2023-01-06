import {useContext} from 'react'
import ButtonIcon from '../Card/ButtonIcon'
import styles from "./HeaderButton.module.css"
  import Cardcontext from '../Store/card-contexet'
function HeaderButton(props) {
    const cardcntxt=   useContext(Cardcontext)
    const numberofCarditems=cardcntxt.items.reduce((currennumber,item)=>{
      return currennumber+item;
     
      
    },0)

  return (
    <>
     <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <ButtonIcon/>
      </span>
     
      <span onClick={props.onClick}>Add card</span>
 
     <span className={styles.badge}>{numberofCarditems}</span>

     </button>


    </>
  )
}

export default HeaderButton