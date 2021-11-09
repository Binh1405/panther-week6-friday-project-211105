import * as types from "../constants/products.constant"

const initialState = {
    products: [], 
    loading: false, 
    errorMessage: "", 
    selectedProduct: null, 
    favoriteProduct: []
}

const productsReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case types.GET_ALL_PRODUCT_REQUEST:
        case types.GET_SINGLE_PRODUCT_REQUEST:
        case types.ADD_FAVORITE_PRODUCT_REQUEST: 
        return {...state, loading: true}
        case types.GET_ALL_PRODUCT_SUCCESS:
        console.log("payload", payload)
        return {...state, products: payload, loading: false}
        case types.GET_SINGLE_PRODUCT_SUCCESS:
        return {...state, loading: false, selectedProduct: payload}
        case types.ADD_FAVORITE_PRODUCT_SUCCESS:
        return {...state, favoriteProduct: payload, loading: false}
        case types.GET_ALL_PRODUCT_FAIL:
        return {...state, errorMessage: payload, loading: false}
        case types.GET_SINGLE_PRODUCT_FAIL:
        case types.ADD_FAVORITE_PRODUCT_FAIL:
        return {...state, loading: false}
        default: 
        return state
    }
}

export default productsReducer