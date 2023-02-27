import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({

    name: "cartSlice",

    initialState: [],

    reducers: {

        addToCart: (state, action) => {

            let findProduct = state.find(product => product.id === action.payload.id);

            if (findProduct) {

                findProduct.quantity += 1;

            } else {

                let cloneProduct = { ...action.payload, quantity: 1 };

                state.push(cloneProduct);

            }

        },

        deleteFromCart: (state, action) => {

            return state.filter(product => product.id !== action.payload.id);

        },

        clearCart: (state, action) => {

            return [];

        }

    }

});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;