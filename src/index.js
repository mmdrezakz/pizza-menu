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

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt="ax" />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <div>{props.pizzaObj.ingredients}</div>
        <p>price:{props.pizzaObj.price + 2}$</p>
      </div>
    </li>
  );
}
const pizzas = pizzaData;
function Menu() {
  return (
    <div>
      {pizzas.length > 0 ? (
        <div className="menu">
          <h2 className="menu">Our Menu</h2>
          <ul className="pizzas">
            {pizzaData.map((el) => (
              <Pizza pizzaObj={el} key="el.name" />
            ))}
          </ul>
        </div>
      ) : (
        <h1>هیچ غذایی نداریم</h1>
      )}
    </div>
  );
}
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "40px" };
  return (
    <header className="header">
      <h1 style={style}>Welcome To Home Page</h1>
    </header>
  );
}

function Footer() {
  const Now = new Date();
  let hour = Now.getHours();
  return (
    <footer className="footer">
      <div>
        <Time />
        {hour >= 12 && hour <= 23 ? (
          <Order Text="Open" />
        ) : (
          <Order Text="Close" />
        )}
      </div>

      {hour >= 12 && hour <= 23 ? <Button /> : null}
    </footer>
  );
}
function Order(props) {
  return (
    <p
      style={{
        marginBottom: "1rem",
        textAlign: "center",
        marginLeft: "1.4rem",
        marginTop: "1rem",
      }}
    >
      {props.Text}
    </p>
  );
}
function Button() {
  return (
    <div style={{ display: "block" }}>
      <button className="btn">Buy</button>
    </div>
  );
}
function Time() {
  return <h4>{new Date().toLocaleString()}</h4>;
}
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
