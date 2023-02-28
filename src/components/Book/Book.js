import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Book.css';

const Book = () => {
    const room = useLoaderData();
    const { name } = room[0];
    return (
        <div className='booking-room'>
            <h2>Let's Book a {name}</h2>
            <p>Want Book a <Link to='/'>Different Room</Link></p>
        </div>
    );
};

export default Book;