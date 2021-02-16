import produce from "immer";
import {
  GET_RECIPES_SUCCESS,
  GET_CURRENT_RECIPE_SUCCESS,
  UPDATE_INGREDIENT,
  ADD_NEW_INGREDIENT,
  UPDATE_DIRECTION,
  ADD_NEW_DIRECTION,
  UPDATE_RECIPE,
  ADD_RECIPE,
} from "../actions/recipes";

const initialState = {
  recipesList: [],
  currentRecipe: { ingredients: [], directions: [] },
};

const recipesReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_RECIPES_SUCCESS:
        draft.recipesList = action.recipes;
        draft.loading = false;
        break;

      case GET_CURRENT_RECIPE_SUCCESS:
        draft.currentRecipe = action.recipe;
        draft.loading = false;
        break;

      case UPDATE_RECIPE:
        const recipeIndex = draft.recipesList.findIndex(
          (recipe) => recipe.uuid === action.recipe.uuid
        );
        draft.recipesList[recipeIndex] = action.recipe;
        draft.currentRecipe = action.recipe;
        break;

      case UPDATE_INGREDIENT:
        const ingredientIndex = draft.currentRecipe.ingredients.findIndex(
          (ingredient) => ingredient.uuid === action.ingredient.uuid
        );

        draft.currentRecipe.ingredients[ingredientIndex] = action.ingredient;
        const updateIngredientsIndex = draft.recipesList.findIndex(
          (recipe) => (recipe.uuid = draft.currentRecipe.uuid)
        );
        draft.recipesList[updateIngredientsIndex] = draft.currentRecipe;
        break;

      case ADD_NEW_INGREDIENT:
        draft.currentRecipe.ingredients.push(action.ingredient);
        const newIngredientsIndex = draft.recipesList.findIndex(
          (recipe) => (recipe.uuid = draft.currentRecipe.uuid)
        );
        draft.recipesList[newIngredientsIndex] = draft.currentRecipe;
        break;

      case UPDATE_DIRECTION:
        const directionIndex = action.directionIndex;

        draft.currentRecipe.directions[directionIndex] = action.direction;
        const updateDirectionsIndex = draft.recipesList.findIndex(
          (recipe) => (recipe.uuid = draft.currentRecipe.uuid)
        );
        draft.recipesList[updateDirectionsIndex] = draft.currentRecipe;
        break;

      case ADD_NEW_DIRECTION:
        draft.currentRecipe.directions.push(action.direction);
        const newDirectionsIndex = draft.recipesList.findIndex(
          (recipe) => (recipe.uuid = draft.currentRecipe.uuid)
        );
        draft.recipesList[newDirectionsIndex] = draft.currentRecipe;
        break;

      case ADD_RECIPE:
        draft.recipesList.push(action.recipe);

        break;
      default:
        return draft;
    }
  });
};

export default recipesReducer;
