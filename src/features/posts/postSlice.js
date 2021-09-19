import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../../api/baseurl";



export const loadPosts = createAsyncThunk(
  "posts/load",
  async (param, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseurl}/feed`);
      console.log(response.data.feedData);
      return fulfillWithValue(response.data.feedData);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const addPost = createAsyncThunk(
  "posts/add",
  async ({ text }, { fulfillWithValue, rejectWithValue }) => {
    try {

      const response = await axios.post(`${baseurl}/post/new`, { text });
      console.log(response.data);
      return fulfillWithValue(response.data.newPost);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const likePost = createAsyncThunk(
  "posts/like",
  async ({postId, like}, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseurl}/post/${like?"like":"unlike"}/${postId}`, {});
      console.log(response.data);
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const commentPost = createAsyncThunk(
  "posts/comment",
  async ({postId, comment}, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseurl}/post/comment/${postId}`, {comment});
      // console.log(response.data);
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const loadOtherUser = createAsyncThunk(
  "posts/loadOtherUser",
  async (userId, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseurl}/user/otherUser/${userId}`);
      console.log(response.data);
      return fulfillWithValue(response.data.otherUserdata);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
    otherUser:null,
    // tempComment:null
  },
  reducers: {
  },
  extraReducers: {
    [loadPosts.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.posts = action.payload;
      state.status = "success";
    },

    [addPost.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [likePost.fulfilled]: (state, action) => {
      const postIndex = state.posts.findIndex(
        (post) => post._id === action.payload.postId
        
      );

      state.posts[postIndex].likes.push(action.payload.data);

    },
    [commentPost.fulfilled] : (state, action) => {
        const postIndex = state.posts.findIndex(
            (post) => post._id === action.payload.postId
          );

          state.posts[postIndex].comments = action.payload.commentsData;
        // state.tempComment = action.payload.commentsData
    },
    [loadOtherUser.fulfilled]: (state, action) => {
      state.otherUser = action.payload
    }
  },
});

export const {likeButtonPressed} = postSlice.actions
export default postSlice.reducer;
