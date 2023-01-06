import React from "react";
import styles from "./Ordercard.module.css";
import Modal from "../UI/Modal";
function Ordercard(props) {
  const carditems =  <ul className={styles['card-items']} >{ [
        { id: "c1", name: "Butter-naan", price: "30", amount: "2" }].map(item => <li key={item.id}
          >
            {item.name}
          </li>)}
          </ul>
     
  return <Modal>
    {carditems}
    <div className={styles.total}>
    <span>Total Amount</span>
    <span>30</span></div>
    <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onCloseHandler}>close</button>
        <button className={styles.button}>Order</button>
    </div>
  </Modal>;
}

export default Ordercard;
