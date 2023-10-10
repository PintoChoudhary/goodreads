import React, {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function ProtectedRoutes(props) {
    const {Component} = props
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login')
        }
    });
    return (
        <>
        <Component/>
        </>
    )
}

export default ProtectedRoutes
