import { SET_EDITORS_CHOICE, SET_LATEST_ARTICLES, SET_LATEST_REVIEW } from "../constants";

export const setEditorsChoice = (data) => {
  return {
    type: SET_EDITORS_CHOICE,
    payload: data,
  };
};

export const setLatestArticles = (data) => {
  return {
    type: SET_LATEST_ARTICLES,
    payload: data,
  };
};

export const setLatestReview = (data) => {
  return {
    type: SET_LATEST_REVIEW,
    payload: data,
  };
};