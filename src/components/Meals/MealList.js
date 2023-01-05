import React from 'react'
import styles from "./MealList.Module.css"
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Butter Naan',
      description: 'Finest butter and veggies',
      price: 30,
    },
    {
      id: 'm2',
      name: 'Dosa',
      description: 'A TN specialty!',
      price: 30,
    },
    {
      id: 'm3',
      name: 'Idly',
      description: 'Flower soft',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
function MealList() {
    const list= DUMMY_MEALS.map((list=><li key={list.id}>{list.name}</li>));
  return (
    <React.Fragment>
       <section className={styles.meals}>
     <ul>
        {list}
     </ul></section>

    </React.Fragment>
  )
}

export default MealList