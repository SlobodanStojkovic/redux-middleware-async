import Axios from "axios";

/* export const fetchPosts = async () => {  //this code return error because its async action and its not possible without redux thunk
  const response = await Axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return {
    type: "FETCH_POSTS",
    payload: response.data,
  };
};
 */

//longer version
/* export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);

    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
}; */

//shorter version
/* export const fetchPosts = () => async (dispatch, getState) => {
  const response = await Axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response.data);

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
}; */

export const fetchPosts = () => async (dispatch, getState) => {
  dispatch({
    type: "FETCH_POSTS_REQUEST",
  });
  try {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    dispatch({
      type: "FETCH_POSTS_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_POSTS_ERROR",
      error: error,
    });
  }
};
