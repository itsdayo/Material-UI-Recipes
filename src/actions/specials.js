import axios from "axios";
import { mockRecipes } from "./../mockData/recipes";
export const GET_SPECIALS_SUCCESS = "GET_SPECIALS_SUCCESS";

export function getSpecials() {
  return getSpecialsSuccess(mockRecipes.specials);

  // return function (dispatch) {
  //   return axios.get("http://localhost:3001/specials").then(({ data }) => {
  //     dispatch(getSpecialsSuccess(data));
  //   });
  // };
}

function getSpecialsSuccess(specials) {
  return {
    type: GET_SPECIALS_SUCCESS,
    specials,
  };
}
