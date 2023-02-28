import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Room from '../Room/Room';
import './Home.css';

const Home = () => {
    const rooms = useLoaderData();
    return (
        <div className='room-card'>
            {
                rooms.map(room => <Room
                    key={room.id}
                    room={room}
                ></Room>)
            }
        </div>
    );
};

export default Home;