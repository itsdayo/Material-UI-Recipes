import { mockRecipes } from "./../mockData/recipes";

export const GET_RECIPES_SUCCESS = "GET_RECIPES_SUCCESS";
export const ADD_RECIPE = "ADD_RECIPE";

export const SAVE_CURRENT_RECIPE_SUCCESS = "SAVE_CURRENT_RECIPE_SUCCESS";
export const GET_CURRENT_RECIPE_SUCCESS = "GET_CURRENT_RECIPE_SUCCESS";

export const UPDATE_INGREDIENT = "UPDATE_INGREDIENT";
export const UPDATE_INGREDIENT_SUCCESS = "UPDATE_INGREDIENT_SUCCESS";
export const ADD_NEW_INGREDIENT = "ADD_NEW_INGREDIENT";
export const UPDATE_DIRECTION = "UPDATE_DIRECTION";

export const ADD_NEW_DIRECTION = "ADD_NEW_DIRECTION";
export const UPDATE_RECIPE = "UPDATE_RECIPE";

//get all recipes
export function getRecipes() {
  return getRecipesSuccess(mockRecipes.recipes);

  // Always use upsert for both inserts and modifies
  // mockRecipes={title:'pancakes', description: 'hot pancakes ready to be served', servings:1,prepTime:1,cookTime:1, ingredients:[], directions:[]}
  // console.log(
  //   "animals",
  //   db.recipes.find().fetch((res) => res)
  // );
  // const recipesLen = db.recipes;
  // if (recipesLen) {

  // }

  // return axios
  //   .get("http://localhost:3001/recipes")
  //   .then(({ data }) => {
  //     console.log("old data", data);
  //      dispatch(getRecipesSuccess(data));
  //   })
  //   .catch((err) => {
  //     dispatch({ type: "GET_RECIPE_FAILURE", err });
  //   });
}

//get the current recipe by ID
export function getCurrentRecipe(recipeId) {
  return function (dispatch, getState) {
    let currentRecipe = {};
    const recipes = getState().recipes.recipesList;
    if (recipes) {
      // get current recipe from state
      currentRecipe = recipes.filter((recipe) => recipe.uuid === recipeId);
    } else {
      currentRecipe = mockRecipes.recipes.filter(
        (recipe) => recipe.uuid === recipeId
      );

      //get current recipe from mock data
    }

    dispatch(getCurrentRecipeSuccess(currentRecipe[0]));

    // Success:
    // Query dog (with no query options beyond a selector)

    // return axios
    //   .get(`http://localhost:3001/recipes/${recipeId}`)
    //   .then(({ data }) => {
    //     dispatch(getCurrentRecipeSuccess(data));
    //   });
  };
}

export function loadRecipes(recipes) {
  return getRecipesSuccess(recipes);
}
export function updateRecipe(recipe) {
  return {
    type: UPDATE_RECIPE,
    recipe,
  };
}

export function saveCurrentRecipe() {
  return function (dispatch, getState) {
    // const recipe = getState().recipes.currentRecipe;
    // const recipes = getState().recipes.recipesList;
    // whatever action that updates currentRecipes needs to update Recipes
  };
  //   return axios
  //     .put(`http://localhost:3001/recipes/${recipe.uuid}`, recipe)
  //     .then(({ data }) => dispatch(saveCurrentRecipeSuccess(data)));
  // };
}

// export function postNewRecipe(newRecipe) {
//   return function (dispatch) {
//     dispatch(addRecipe(newRecipe));
//     return axios
//       .post(`http://localhost:3001/recipes`, newRecipe)
//       .then(({ data }) => dispatch(saveCurrentRecipeSuccess(data)));
//   };
// }

export function updateIngredient(ingredient) {
  return {
    type: UPDATE_INGREDIENT,
    ingredient,
  };
}
export function updateDirection(direction, directionIndex) {
  return {
    type: UPDATE_DIRECTION,
    direction,
    directionIndex,
  };
}
export function addNewIngredient(ingredient) {
  return {
    type: ADD_NEW_INGREDIENT,
    ingredient,
  };
}
export function addNewDirection(direction) {
  return {
    type: ADD_NEW_DIRECTION,
    direction,
  };
}

export function addRecipe(recipe) {
  return {
    type: ADD_RECIPE,
    recipe,
  };
}

function getRecipesSuccess(recipes) {
  return {
    type: GET_RECIPES_SUCCESS,
    recipes,
  };
}

export function getCurrentRecipeSuccess(recipe) {
  return {
    type: GET_CURRENT_RECIPE_SUCCESS,
    recipe,
  };
}

export function saveCurrentRecipeSuccess(recipe) {
  return {
    type: SAVE_CURRENT_RECIPE_SUCCESS,
    recipe,
  };
}
export function resetRecipes() {
  return getRecipesSuccess(mockRecipes.recipes);
}
