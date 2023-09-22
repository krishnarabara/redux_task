import items from './actionType'
import * as actionTypes from './actionTypesc'

export const addItem = () => {
    return{
        type: actionTypes.ADD_ITEM,
        
    }
}


export const deleteItem = (item) => {
    return{
        type: actionTypes.DELETE_ITEM,
        item: item
    }
}

export const setTitle = (title) => {
    return{
        type: actionTypes.SET_TItle,
        title: title
    }
}

export const setError = (error) => {
    return{
        type: actionTypes.SET_ERROR,
        error: error
    }
}

export const setItem = (item) => {
    return{
        type: actionTypes.SET_ITEM,
        item: item
    }
}
export default App;
