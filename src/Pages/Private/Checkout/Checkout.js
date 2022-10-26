import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkOut = useLoaderData();
    const { title, about } = checkOut;
    return (
        <div>
            <h1 className='mt-3'>Course Name: {title}</h1>
            <p className='mt-3 fs-5'>{about}</p>
        </div>
    );
};

export default Checkout;