import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const checkOut = useLoaderData();
    const { user } = useContext(AuthContext)
    const { title, about } = checkOut;
    return (
        <div>
            <h1 className='mt-3'>Course Name: {title}</h1>
            <p> Congratulation!!! <span className='fw-bold fw-5'>{user?.displayName}</span> You have Successfully Checked Out...</p>
            <p>
                <span className='fw-bold fw-5'>{user?.email}</span>
            </p>
            <p className='mt-3 fs-5'>{about}</p>
        </div>
    );
};

export default Checkout;