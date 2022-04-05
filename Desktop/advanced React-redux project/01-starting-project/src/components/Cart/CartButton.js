import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ActionUiSlice } from "../../store/ui-slice";

const CartButton = (props) => {
  const Quantity = useSelector((state) => state.cart.Totalquntity);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(ActionUiSlice.ToggleCart());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{Quantity}</span>
    </button>
  );
};

export default CartButton;
