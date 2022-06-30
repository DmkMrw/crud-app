//selectors
export const getAllCategories = (state) => state.categories;
export const getPostByCategory = ({ posts }, categoryId) => posts.filter(post => post.category === categoryId);

// actions


// action creators


const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default categoriesReducer;