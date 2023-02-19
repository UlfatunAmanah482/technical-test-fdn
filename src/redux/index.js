import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { editorChoiceReducer } from "./reducers";

const rootReducers = combineReducers({
  data: editorChoiceReducer
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));