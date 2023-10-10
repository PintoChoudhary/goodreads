import { combineReducers } from "redux";
import {bookReducer , seletedBookReducer} from '../reducres/book-reducers'
const rootReducer = combineReducers({
    allBooks: bookReducer,
    book : seletedBookReducer
})

export default rootReducer