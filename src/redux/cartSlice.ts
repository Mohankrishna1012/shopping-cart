import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  products: Product[];
  totalAmount: number;
}

const initialState: CartState = {
  products: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.products.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      state.totalAmount += action.payload.price * action.payload.quantity;
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const product = state.products.find(item => item.id === action.payload.id);
      if (product) {
        const diff = action.payload.quantity - product.quantity;
        product.quantity = action.payload.quantity;
        state.totalAmount += product.price * diff;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const product = state.products.find(item => item.id === action.payload);
      if (product) {
        state.totalAmount -= product.price * product.quantity;
        state.products = state.products.filter(item => item.id !== action.payload);
      }
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
