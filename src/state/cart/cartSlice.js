import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const tempArray = [];
      const firstElement = [];
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id !== action.payload) {
          tempArray.push(state.items[i]);
        } else {
          firstElement.length > 0 && tempArray.push(state.items[i]);
          firstElement.push("first");
        }
      }
      state.items = tempArray;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
