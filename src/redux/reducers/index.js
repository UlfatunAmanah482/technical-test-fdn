import { SET_LATEST_ARTICLES, SET_EDITORS_CHOICE, SET_LATEST_REVIEW } from "../constants";

const initialState = {
  editorsChoice: [],
  latestArticles: [],
  latestReview: [],
}

export const dataReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_EDITORS_CHOICE:
      return {
        ...state,
        editorsChoice: action.payload
      }

    case SET_LATEST_ARTICLES:
      return {
        ...state,
        latestArticles: action.payload
      }

    case SET_LATEST_REVIEW:
      return {
        ...state,
        latestReview: action.payload
      }

    default:
      return state;
  }
}