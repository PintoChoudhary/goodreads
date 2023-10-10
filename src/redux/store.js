import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducres";
import thunk from "redux-thunk";

const store = createStore(rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())
    applyMiddleware(thunk))
export default store