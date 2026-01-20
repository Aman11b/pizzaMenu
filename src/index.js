import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // INLINE CSS
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza CO.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // this will work if empty array is passed too
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      /> */}
      {/* <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}

      {/* <div>
        {pizzaData.map((pizza) => (
          <Pizza name={pizza.name} photoName={pizza.photoName} />
        ))}
      </div> */}

      {/* <div>
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} />
        ))}
      </div>
      
      // this still does not have unique key
      */}

      {/* ideal rendering */}

      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
}

/**
 * PROPS (PROPERTY)
 * ->passing data between components from parent to child components
 * ->first pass prop in component then receive it then
 * -> pass info down the tree
 * -> can pass any value in prop
 * -> props are ready-only => data in component is made from props (data coming from parent component basically outside)and state(internal component data that can be updated by logic basically inside)
 *-> props cant be modified by child component that are read only to mutate prop you need state
 *-> prop is obj if u change you change parent too and that cause side effect coz u are changing data which is outside ,react is pure function that means not affecting outside
 * -> one way data flow=> only from parent to child not opposite only top to bottom (not in angular) it makes application predictable and easier, debug becomes easy, two way data binding is less efficent
 */

/**
 * RULES OF JSX
 * -> essestially HTML but with {can add JS code}
 * -> {statement are not allowed here like if else or for or switch}
 * -> JSX -> JS expression
 * -> a peace of JSX has on root element
 */

function Pizza(props) {
  // console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  // return React.createElement("footer", null, "we are currently open");

  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("we are open");
  // else {
  //   alert("sorry");
  // }
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} We're currently open */}

      {/* conditional rendering */}
      {isOpen && (
        <div className="order">
          <p>
            We're open untill {closeHour}:00. Come visit us or order online.{" "}
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
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
