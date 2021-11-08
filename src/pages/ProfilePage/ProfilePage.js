import React, { useEffect } from 'react'
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'
import userAction from '../../redux/actions/user.action'
import {useNavigate} from "react-router-dom"

const ProfilePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userAction.getCurrentUser())
        
    }, [])
    let navigate = useNavigate()
    const isAuthenticated= useSelector(state=> state.auth.isAuthenticated)
    if(!isAuthenticated){
    navigate("/login")
    }
    console.log("isAuthen", isAuthenticated)

    return (
        <div>
            This is profile page
        </div>
    )
}

export default ProfilePage
