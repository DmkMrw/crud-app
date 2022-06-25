// import shortid from "shortid";

//selectors


// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');


// action creators

export const deletePost = payload => ({ type: DELETE_POST, payload });
export const addPost = payload => ({type: ADD_POST, payload })


const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
        return [...statePart, {...action.payload}] // dlaczego kropki przed action.payload
    case DELETE_POST:
        return statePart.filter(post => post.id !== action.payload);
    default:
      return statePart;
  };
};

export default postsReducer;