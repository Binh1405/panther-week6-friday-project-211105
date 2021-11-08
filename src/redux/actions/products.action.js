import * as types from "../constants/products.constant"
import api from "../../apiService"
import {toast } from 'react-toastify';

const prodAction = {}

prodAction.getProducts = ({page, limit, search}) => async(dispatch) => {
    dispatch({type: types.GET_SINGLE_PRODUCT_REQUEST, payload: null})
    try{
        let url = `${process.env.REACT_APP_BACKEND_API}/products?page=${page}&limit=${limit}&search=${search}`
        const data = await api.get(url)
        dispatch({type:types.GET_SINGLE_PRODUCT_SUCCESS, payload: data.data.products})
    }
    catch(error){
        toast.error (error.message)
        dispatch({type: types.GET_SINGLE_PRODUCT_FAIL, payload: error})
    }
}

prodAction.getDetail = ({productId}) => async (dispatch) =>{
    dispatch ({type: types.GET_SINGLE_PRODUCT_REQUEST, payload: null})
    try{
        let url = `${process.env.REACT_APP_BACKEND_API}/products/${productId}`
        const data = await api.get(url)
        dispatch ({type: types.GET_SINGLE_PRODUCT_SUCCESS, payload: data.data.products})
    } catch(error){
        toast.error(error.message)
        dispatch({type: types.GET_SINGLE_PRODUCT_FAIL, payload: error})
    }
    }

prodAction.addToShoppingList = ({addProduct}) => async (dispatch) => {
    dispatch({type: types.ADD_FAVORITE_PRODUCT_REQUEST, payload: null})
    try{
        let url = `${process.env.REACT_APP_BACKEND_API}/users/cart`
        const data = await api.post(url, addProduct)
        toast.success("The product has been added to the shopping list")
        dispatch({type: types.ADD_FAVORITE_PRODUCT_SUCCESS, payload: data.data.products})
    }catch(error){
        toast.error(error.message)
        dispatch({type: types.ADD_FAVORITE_PRODUCT_FAIL})
    }
}

export default prodAction

