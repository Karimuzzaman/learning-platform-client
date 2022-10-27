import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

// // creating checkout private route page.
const Checkout = () => {
    const checkOut = useLoaderData();
    const { user } = useContext(AuthContext)
    const { title, about } = checkOut;
    return (
        <div>
            <h1 className='mt-3'>Course Name: {title}</h1>
            <br />
            <h2>Welcome to Checkout page</h2>
            <br />
            <p className='fs-4'> Congratulation!!! <span className='fw-bold fw-5'>{user?.displayName}</span> You have Successfully Checked Out...</p>
            <p className='fs-4'> your email:
                <span className='fw-bold fw-5'>{user?.email}</span>
            </p>
            <p className='mt-3 fs-5'>{about}</p>
        </div>
    );
};

export default Checkout;