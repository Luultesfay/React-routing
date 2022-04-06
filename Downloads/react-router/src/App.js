/*
The <Switch /> component will only render the first route that matches/includes the path.
 Once it finds the first route that matches the path, it will not look for any other matches
 */

import { Route, Switch, Redirect } from "react-router-dom";

import NewQoute from "./pages/NewQoute";
import AllQoute from "./pages/AllQuotes";
import QoutesDetail from "./pages/QoutesDetail";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/allQoute" />
        </Route>
        <Route path="/allQoute" exact>
          <AllQoute />
        </Route>
        <Route path="/qoute/:qouteId">
          <QoutesDetail />
        </Route>
        <Route path="/newQoute">
          <NewQoute />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
