import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='border border-success mt-3 rounded bg-success bg-opacity-25'>
            <h2>Course Categories</h2>
            {
                categories.map(category => <p key={category.id}>
                    <Link className='fs-5 text-dark text-decoration-none link-danger' to={`/courses/${category.id}`}>{category.name}</Link>

                </p>)
            }
        </div>
    );
};

export default LeftSideNav;