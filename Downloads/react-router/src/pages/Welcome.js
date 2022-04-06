import { Route } from "react-router-dom";

//here nested routing
const Welcome = () => {
  return (
    <section>
      <h1>this is Welcome</h1>
      <Route path="/welcome/new-user">
        <p>welcome new user</p>
      </Route>
    </section>
  );
};
export default Welcome;
