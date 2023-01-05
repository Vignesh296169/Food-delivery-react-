import React from "react";
import styles from "./MealList.Module.css";
import Card from "../UI/Card";
import Mealitem from "./Mealitem/Mealitem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Butter Naan",
    description: "Finest butter and veggies",
    price: 30,
  },
  {
    id: "m2",
    name: "Dosa",
    description: "A TN special!",
    price: 30,
  },
  {
    id: "m3",
    name: "Idly",
    description: "Flower soft",
    price: 12,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18,
  },
];
function MealList() {
  const list = DUMMY_MEALS.map((list) => (
    <Mealitem
      key={list.id}
      title={list.name}
      des={list.description}
      price={list.price}
    />
  ));
  return (
    <React.Fragment>
      <section className={styles.meals}>
        <Card>
          <ul>{list}</ul>{" "}
        </Card>
      </section>
    </React.Fragment>
  );
}

export default MealList;
