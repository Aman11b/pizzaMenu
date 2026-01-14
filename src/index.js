import React from "react";
import ReactDOM from "react-dom/client";

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

/**
 * COMPONENTS
 * building block of UI
 * react renders the view of each component
 * component has its own data login and appearance
 * componenets can be reused nested inside and pass data between them
 */

/**
 * component as function
 * 1->component name start with capital letter
 * 2->function needs to return some markup jsx or null
 * 3->each component returns exactly one element
 * 4->never nest component declaration
 */

/**
 * JSX
 * -> declerative syntax to describe what component look like and how they work
 * -> each component retrun one block of JSX
 * -> extention of JS embed HTML + CSS and react
 * -> babel convert JSX(browser dont understand it) to JS
 * -> imperative approach (JS manually tell all to do)
 * -> declarative appraoch(just describe what ui should look like)
 */
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci "></img>
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}
function Header() {
  return <h1>Fast React Pizza CO.</h1>;
}
function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
    </div>
  );
}
function Footer() {
  // return React.createElement("footer", null, "we are currently open");

  return (
    <footer>{new Date().toLocaleTimeString()} We're currently open</footer>
  );
}

// const Test = () => {};

// render app in DOM v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// StrictMode-> render twice in order to find bugs and check if outdated parts of API
