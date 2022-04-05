import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const ItemsInCart = useSelector((state) => state.cart.Items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {ItemsInCart.map((items) => (
          <CartItem
            key={items.id}
            item={{
              title: items.title,
              quantity: items.quantity,
              total: items.totalPrice,
              price: items.price,
              id: items.id,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
