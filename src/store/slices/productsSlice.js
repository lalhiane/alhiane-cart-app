import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(

    "productsSlice/fetchProducts",

    async _ => {

        const response = await fetch("https://fakestoreapi.com/products");

        const products = await response.json();

        return products;

    }

)

const productsSlice = createSlice({

    name: "productsSlice",

    initialState: [],

    extraReducers: (builder) => {

        builder.addCase(fetchProducts.pending, (state, action) => {

            return "pending";

        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {

            return action.payload;

        });

    }

});

export default productsSlice.reducer;