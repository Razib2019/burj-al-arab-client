import React from 'react';
import { Link } from 'react-router-dom';
import './Room.css';
import { FaDollarSign, FaMale, FaFemale, FaBed } from 'react-icons/fa';

const Room = ({ room }) => {
    const { price, bed, description, image, name, person, id } = room;
    return (
        <div className="card">
            <img className='card-img' src={image} alt="Room Img" />
            <div className="card-content">
                <h2 >{name}</h2>
                <p>{description}</p>
                <div className='card-info'>
                    <div className='bed-info'>
                        <FaBed />
                        <h4>: {bed}</h4>
                    </div>
                    <div className='person-info'>
                        <FaMale /><FaFemale />
                        <h4>: {person}</h4>
                    </div>
                    <div className='price-info'>
                        <FaDollarSign />
                        <h4>: {price}</h4>
                    </div>
                    <div>
                        <Link to={`/book/${id}`}><button className='card-btn'>Book</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Room;