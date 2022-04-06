import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h1>this is product</h1>
      <ul>
        <li>
          <Link to="/Products/p1">A Book</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/Products/p2">A Carpet</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/Products/p3">A Car</Link>
        </li>
      </ul>
    </section>
  );
};
export default Products;
