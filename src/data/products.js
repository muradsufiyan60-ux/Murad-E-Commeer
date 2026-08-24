import cappuccino from "../assets/coffee4.jpg";
import latte from "../assets/coffee6.png";
import mocha from "../assets/coffee7.jpg";
import americano from "../assets/coffee8.jpg";
import blackcoffee from "../assets/black.jpg";
import caramelWhiteMocha from "../assets/coffee9.jpg";
import coffeechocolate from "../assets/coffee5.jpg";

const products = [
  {
    id: 1,
    name: "Cappuccino",
    price: 3.5,
    description: "Rich espresso with steamed milk foam.",
    image: cappuccino,
  },
  {
    id: 2,
    name: "Mocha",
    price: 4.0,
    description: "Rich mocha with steamed milk foam.",
    image: mocha,
  },
  {
    id: 3,
    name: "Black Coffee",
    price: 4.0,
    description: "Strong black coffee.",
    image: blackcoffee,
  },
  {
    id: 4,
    name: "White Mocha",
    price: 4.2,
    description: "Caramel white mocha iced coffee.",
    image: caramelWhiteMocha,
  },
  {
    id: 5,
    name: "Latte",
    price: 4.0,
    description: "Rich latte with steamed milk foam.",
    image: latte,
  },
  {
    id: 6,
    name: "Coffee Chocolate",
    price: 3.2,
    description: "Strong and bold Coffee Chocolate.",
    image: coffeechocolate,
  },
  {
    id: 7,
    name: "Americano",
    price: 3.2,
    description: "Strong and bold Americano shot.",
    image: americano,
  },
];

export default products;