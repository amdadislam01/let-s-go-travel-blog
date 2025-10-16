import React, { use } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router'
import Loading from '../components/Loading/Loading'

const PrivetRoutes = ({children}) => {
    const {user, loading} = use(AuthContext)
    const location = useLocation();
    if (loading) {
        return <Loading />
    }
    if (user) {
        return children;
    }
  return <Navigate to="/login" state={{from: location}} replace />
}

export default PrivetRoutes
