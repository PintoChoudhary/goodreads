import { ActionTypes } from "../constants/action-types"

const initialState = {
    books: []
}
export const bookReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_BOOKS:
            return {
                ...state,
                books: payload
            }
        case ActionTypes.FETCH_BOOKS:
            return {
                ...state,
                books: payload
            }
        default:
            return state;
    }
}
export const seletedBookReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_BOOKS:
            return {
                ...state, ...payload
            }
        case ActionTypes.REVOME_BOOKS:
            return {}
        default:
            return state;
    }
} 