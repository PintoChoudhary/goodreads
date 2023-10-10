import { ActionTypes } from "../constants/action-types"
import BOOK_DATA from '../../data/Book';
    

export const fetchBooks =()=> async(dispatch) =>{
    dispatch({type: ActionTypes.FETCH_BOOKS , payload : BOOK_DATA})
}
export const SetBooks = (books) =>{
    return{
        type: ActionTypes.SET_BOOKS,
        payload: books
    }
} 
export const AddBooks = (books) =>{
    return{
        type: ActionTypes.ADD_BOOKS,
        payload: books
    }
} 
export const RemoveBooks = () =>{
    return{
        type: ActionTypes.REVOME_BOOKS,
    }
} 