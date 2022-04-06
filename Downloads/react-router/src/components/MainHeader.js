//import { Link } from "react-router-dom"; //Link prevent page from send(refresh) a request to server when ever the link clicked and preserve our state
import { NavLink } from "react-router-dom"; //NavLink is the same as 'Link' but it have extra advantage  it higlights the current page clicked
import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* <a href="/welcome">welcome</a>  
          // a herf anchor navigates us to the page but they dont preserve the state,
           we loss the state when ever we click the link b/c they send new request to the server
           so we use ' Link to' from router pakage  */}
            {/* <Link to="/welcome">welcome</Link>  // change Link  with NavLink activeClassName={classes.active} */}
            <NavLink activeClassName={classes.active} to="/welcome">
              welcome
            </NavLink>
          </li>
          <li>
            {/*activeClassName is property given by the router  and classes.active is we defined in the css manually to show us which element is active*/}
            <NavLink activeClassName={classes.active} to="/Product">
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
