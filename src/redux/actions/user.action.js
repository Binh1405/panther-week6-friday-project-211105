import * as types from "../constants/user.constant"
import api from "../../apiService"

const userAction = {}

userAction.getCurrentUser = () => 
async(dispatch) => {
    try {
        dispatch({type: types.GET_SINGLE_USER_REQUEST})
        // const url="/auth/register"
        const res = await api.get("/users/me")
        dispatch({type: types.GET_SINGLE_USER_SUCCESS})
    } catch (error) {
        console.log("error", error)
        dispatch({type: types.GET_SINGLE_USER_FAIL})
    }
}

export default userAction