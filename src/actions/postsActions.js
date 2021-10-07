// Here we are defining the action types as constants. Not necessary, but common convention and make it easy to export the actions around and prevent typos!

import postsReducer from '../reducers/postsReducer';

// Create Redux action types:

// getPosts-begin to tell Redux we are going to fetch posts from an api
export const GET_POSTS = 'GET_POSTS';
// getPostsSuccess- pass the posts to Redux on successful api call
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
// getPostFailure- tell Redux there was an error on a failed api call
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

// Create Redux Action Creators that return and action
export const getPosts = () => ({
  type: GET_POSTS,
});

export const getPostsSuccess = () => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
});

// Combine all into an asynchronous thunk (middleware)
export function fetchPosts() {
  return async (dispatch) => {
    dispatch(getPosts());

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();

      dispatch(getPostsSuccess(data));
    } catch (err) {
      dispatch(getPostsFailure());
    }
  };
}
