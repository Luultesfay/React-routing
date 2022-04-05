import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { CartSliceAction } from "../../store/Cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const AddCarthandler = () => {
    dispatch(
      CartSliceAction.addItemCart({ title, quantity, total, price, id })
    );
  };
  const AddRemovehandler = () => {
    dispatch(CartSliceAction.removeItemCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={AddRemovehandler}>-</button>
          <button onClick={AddCarthandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
