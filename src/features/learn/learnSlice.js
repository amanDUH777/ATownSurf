import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/learn';

const initialState = {
    learns: [],
    isError: false,
    isSuccess: false,
    isLoading: false
};

// get learns
export const getLearns = createAsyncThunk(
    'learns',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(API_URL);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('get not working')
        }
    }
);

// create a learn
export const createLearn = createAsyncThunk(
    'new-learn',
    async (learnData, thunkAPI) => {
        try {
            const response = await axios.post(API_URL + "/new-learn", learnData);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('create not working')
        }
    }
);

// edit a learn
export const editLearn = createAsyncThunk(
    'learns/edit',
    async (sentToRedux, thunkAPI) => {
        try {
            console.log(sentToRedux)
            const response = await axios.put(API_URL + "/edit-learn/" + sentToRedux.id,
                { message: sentToRedux.message });
            getLearns()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('edit not working');
        }
    }
);


// delete learn
export const deleteLearn = createAsyncThunk(
    'learns/delete',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(API_URL + id);
            getLearns()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('delete not working');
        }
    }
);

// add comment
export const addComment = createAsyncThunk(
    'learns/add-comment',
    async (sentToRedux, thunkAPI) => {
        try {
            const response = await axios.put(API_URL + '/add-comment/' + sentToRedux.id,
                { comment: sentToRedux.newComments });
            getLearns()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('add comment not working')
        }
    }
)


const learnSlice = createSlice({
    name: 'learn',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createLearn.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createLearn.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.learns.push(action.payload);
            })
            .addCase(createLearn.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(getLearns.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getLearns.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.learns = action.payload;
            })
            .addCase(getLearns.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(deleteLearn.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteLearn.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.learns.findIndex((learn) => learn._id === action.payload._id)
                state.learns.splice(index, 1)
            })
            .addCase(deleteLearn.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(editLearn.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editLearn.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.learns.findIndex((learn) => learn._id === action.payload._id)
                // console.log(action.payload)
                console.log('splice', state.learns.splice(index, 1, action.payload))
                state.learns.splice(index, 1, action.payload);
            })
            .addCase(editLearn.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(addComment.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addComment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.learns.findIndex((learn) => learn._id === action.payload._id)
                // state.learns.comment.push(action.payload)
                state.learns.splice(index, 1, action.payload)
                // console.log(state.learns.comment, 'state.comment')
            })
            .addCase(addComment.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    },
});

console.log(learnSlice);

export default learnSlice.reducer;
export const { reset } = learnSlice.actions;