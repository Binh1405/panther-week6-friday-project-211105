import * as types from "../constants/products.constant"
import api from "../../apiService"
import {toast } from 'react-toastify';

const prodAction = {}

prodAction.getProducts = ({page, limit, search}) => async(dispatch) => {
    dispatch({type: types.GET_ALL_PRODUCT_REQUEST, payload: null})
    try{
        let url = `/products?page=${page}&limit=${limit}`
        if (search){
            url+=`&search=${search}`
        }
        const data = await api.get(url)
        console.log("data", data)
        dispatch({type:types.GET_ALL_PRODUCT_SUCCESS, payload: data.data.data.products})
    }
    catch(error){
        toast.error (error.message)
        dispatch({type: types.GET_ALL_PRODUCT_FAIL, payload: error})
    }
}

prodAction.getDetail = ({productId}) => async (dispatch) => {
    dispatch({type: types.GET_SINGLE_PRODUCT_REQUEST, payload: null});
    try {
      const data = await api.get(`/products/${productId}`);
      console.log('data in getDetail', data.data.data);
      dispatch({
        type: types.GET_SINGLE_PRODUCT_SUCCESS,
        payload: data.data.data.product,
      });
    } catch (error) {
      toast.error(error.message);
      dispatch({type: types.GET_SINGLE_PRODUCT_FAIL, payload: error});
    }
  };

prodAction.addToShoppingList = ({addProduct}) => async (dispatch) => {
    dispatch({type: types.ADD_FAVORITE_PRODUCT_REQUEST, payload: null})
    try{
        const data = await api.post(`/users/cart`, addProduct)
        toast.success("The product has been added to the shopping list")
        dispatch({type: types.ADD_FAVORITE_PRODUCT_SUCCESS, payload: data.data.data.product})
    }catch(error){
        toast.error(error.message)
        dispatch({type: types.ADD_FAVORITE_PRODUCT_FAIL})
    }
}

export default prodAction

