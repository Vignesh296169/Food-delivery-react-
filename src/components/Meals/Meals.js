import React from "react";
import MealsSummary from "./MealsSummary";
import MealList from "./MealList";
function Meals() {
  return (
    <React.Fragment>
      <MealsSummary />
      <MealList />
    </React.Fragment>
  );
}

export default Meals;
