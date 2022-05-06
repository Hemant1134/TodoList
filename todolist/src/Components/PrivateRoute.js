import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
export const authCheck = (WrapComponent) => {

  const Wrapper = (props) => {

    const navigate = useNavigate();

    const token = localStorage.getItem("token")
    const location = useLocation();

    useEffect(() => {
      if (token && (location.pathname == "/login" || location.pathname == "/register")) {
        return navigate("/admin")
      }
      if (!token) {
        return navigate("/login")
      }

    }, [])


    return (<WrapComponent {...props} />)
  }

  return Wrapper;
}


