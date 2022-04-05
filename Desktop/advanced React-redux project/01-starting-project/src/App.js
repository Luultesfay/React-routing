import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const showCart = useSelector((state) => state.ui.isShowCart);
  const cart = useSelector((state) => state.cart);
  //we can put this  http request in one of our chose component   for now we chose to put it here
  useEffect(() => {
    fetch("https://redux-http-1f312-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT", // PUT  overide the data with new data in the firebase database  and POST is storing data to the dataBase
      body: JSON.stringify(cart), //this change the javasScript object to string
    });
  }, [cart]);
  console.log(cart);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
