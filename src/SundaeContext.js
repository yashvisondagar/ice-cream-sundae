import React, { createContext, useContext, useState } from "react";
import chocolateImage from "../src/images/Image (1).png";
import vanillaImage from "../src/images/Image (3).png";
import mintImage from "../src/images/Image (2).png";
import cat1 from "../src/images/cat1.png";
import cat2 from "../src/images/cat2.png";
import cat3 from "../src/images/cat3.png";
import cat4 from "../src/images/cat4.png";
import cat5 from "../src/images/cat5.png";
import cat6 from "../src/images/cat6.png";

// Define static toppings
const staticToppings = [
  { name: "Gummi bears", image: cat1 },
  { name: "Cold Cherry", image: cat2 },
  { name: "Hot Fudge", image: cat3 },
  { name: "Caramel", image: cat4 },
  { name: "Cherry", image: cat5 },
  { name: "Strawberry", image: cat6 },
];

const SundaeContext = createContext();

export const useSundaeContext = () => useContext(SundaeContext);

export const SundaeProvider = ({ children }) => {
  const [scoops, setScoops] = useState([
    { name: "choco", quantity: 0, price: 2, image: chocolateImage },
    { name: "vanilla", quantity: 0, price: 2, image: vanillaImage },
    { name: "mint", quantity: 0, price: 2, image: mintImage },
  ]);

  const [toppings, setToppings] = useState(
    staticToppings.map((topping) => ({
      ...topping,
      selected: false,
    }))
  );

  const toppingPrice = 3;

  const scoopsTotal = scoops.reduce(
    (total, scoop) => total + scoop.quantity * scoop.price,
    0
  );

  const toppingsTotal =
    toppings.filter((topping) => topping.selected).length * toppingPrice;

  const grandTotal = scoopsTotal + toppingsTotal;

  const updateScoopCount = (name, quantity) => {
    setScoops((prevScoops) =>
      prevScoops.map((scoop) =>
        scoop.name === name ? { ...scoop, quantity } : scoop
      )
    );
  };

  const handleToppingChange = (name) => {
    setToppings((prevToppings) =>
      prevToppings.map((topping) =>
        topping.name === name
          ? { ...topping, selected: !topping.selected }
          : topping
      )
    );
  };

  const values = {
    scoops,
    setScoops,
    toppings,
    setToppings,
    scoopsTotal,
    toppingsTotal,
    grandTotal,
    updateScoopCount,
    handleToppingChange,
  };

  return (
    <SundaeContext.Provider value={values}>{children}</SundaeContext.Provider>
  );
};

export default SundaeContext;
