import {combineReducers} from "redux"
import authReducer from "./auth.reducer"
import productsReducer from "./product.reducer"

export default combineReducers({
    auth: authReducer, 
    products: productsReducer
})