/*
The <Switch /> component will only render the first route that matches/includes the path.
 Once it finds the first route that matches the path, it will not look for any other matches
 */
import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>

          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/product" exact>
            {/* exact tells the router  if the whole path is matches   */}
            <Product />
          </Route>
          {/* '/:'(daynamic segment) after this we can write anything  to make daynamic routing  */}
          <Route path="/Products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
