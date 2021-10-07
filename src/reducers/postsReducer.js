export const initalState = {
  posts: [],
  loading: false,
  hasErrors: false,
};

export default function postsReducer(state = initalState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
