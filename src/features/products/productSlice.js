import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

const initialState = {
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false
};

// get products
export const getProducts = createAsyncThunk(
    'products',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(API_URL);
            return response.data
        } catch (error) {
            console.log('broken')
            return thunkAPI.rejectWithValue('get not working')
        }
    }
);

// create a product
export const createProduct = createAsyncThunk(
    'new-product',
    async (productData, thunkAPI) => {
        try {
            const response = await axios.post(API_URL + "/new-product", productData);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('create not working')
        }
    }
);

// edit product
export const editProduct = createAsyncThunk(
    'products/edit',
    async (sentToRedux, thunkAPI) => {
        try {
            console.log(sentToRedux)
            const response = await axios.put(API_URL + "/edit-product/" + sentToRedux.id,
                { title: sentToRedux.title });
            getProducts()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('edit not working');
        }
    }
);


// delete product
export const deleteProduct = createAsyncThunk(
    'products/delete',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(API_URL + id);
            getProducts()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('delete not working');
        }
    }
);

// add comment
export const addComment = createAsyncThunk(
    'products/add-comment',
    async (sentToRedux, thunkAPI) => {
        try {
            const response = await axios.put(API_URL + '/add-comment/' + sentToRedux.id,
                { comment: sentToRedux.newComments });
            getProducts()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('add comment not working')
        }
    }
)


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.products.push(action.payload);
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.products.findIndex((product) => product._id === action.payload._id)
                state.products.splice(index, 1)

            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(editProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.products.findIndex((product) => product._id === action.payload._id)
                // console.log(action.payload)
                console.log('splice', state.products.splice(index, 1, action.payload))
                state.products.splice(index, 1, action.payload);
            })
            .addCase(editProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(addComment.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addComment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.products.findIndex((product) => product._id === action.payload._id)
                // state.Products.comment.push(action.payload)
                state.products.splice(index, 1, action.payload)
                // console.log(state.Products.comment, 'state.comment')
            })
            .addCase(addComment.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    },
});

console.log(productSlice);

export default productSlice.reducer;
export const { reset } = productSlice.actions;