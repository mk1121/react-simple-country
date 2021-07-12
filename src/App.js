import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country";
import Cart from "./components/Cart/Cart";
function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  const addHandle = (data) => {
    const newCart = [...cart, data];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((data) => data.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="App">
      <div className="countries">
        <h2>Total Country:{countries.length}</h2>
        <Cart cart={cart}></Cart>
        {countries.map((data) => {
          return (
            <Country
              country={data}
              key={data.alfa3code}
              addHandle={addHandle}
            ></Country>
          );
        })}
      </div>
      )
    </div>
  );
}
export default App;
