import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Menu from "./Components/Menu";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const time = new Date().getHours();

function App() {
  const modifiedPizzaData = pizzaData.map((pizza) => {
    // Check if time is below 12 or above 22 and update the soldOut property accordingly
    const isSoldOutTime = time < 12 || time > 22;
    return {
      ...pizza,
      soldOut: pizza.soldOut || isSoldOutTime,
    };
  });

  return (
    <div className="container">
      <Header />
      <Menu pizzaData={modifiedPizzaData} time={time} />
      <Footer time={time} />
    </div>
  );
}

export default App;
