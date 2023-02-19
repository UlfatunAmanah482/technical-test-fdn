import { GET_DATA } from "../constants";

const initialState = {
  editorChoice: []
}

export const editorChoiceReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_DATA:
      return {
        ...state,
        editorChoice: action.payload.data
      }

    default:
      return state;
  }
}