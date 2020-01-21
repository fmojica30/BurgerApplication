import * as actionTypes from "./actionTypes";
import axios from "../../axios-order";

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingName: name
  };
};

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingName: name
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FALIED
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://burger-react-4b25a.firebaseio.com/ingredients.json")
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
