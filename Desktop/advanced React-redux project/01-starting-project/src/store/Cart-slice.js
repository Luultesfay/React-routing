import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    Items: [],
    Totalquntity: 0,
  },
  reducers: {
    addItemCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.Items.find((item) => item.id === newItem.id); //we are checking here if the  incoming payload action itmes is existing in items array or not
      state.Totalquntity++;
      if (!existingItem) {
        //if  not exist we push it to the Items array
        state.Items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        //if not we updated quantity and total Price   b/c it is smilar item is coming
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemCart(state, action) {
      state.Totalquntity--;
      //removing item from cart
      const id = action.payload; //the id of the item that should be removed
      const existingItem = state.Items.find((item) => item.id === id); //we are getiing item with the same id that comes from the action payload
      if (existingItem.quantity === 1) {
        //if the qty of that item is equal to 1
        //note: state.Items override the previous array with the new array with out the removed item
        state.Items = state.Items.filter((item) => item.id !== id); //here we filter and keep items thats is not match with the id that was to removed
      } else {
        existingItem.quantity--; //if the item to removed  is more than one in quntity(same type of item) then we reduced them by one
      }
    },
  },
});
export const CartSliceAction = cartSlice.actions;
export default cartSlice;
