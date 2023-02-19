import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { dataReducer } from "./reducers";

const rootReducers = combineReducers({
  data: dataReducer
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));