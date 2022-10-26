import React from 'react';
import Lottie from 'lottie-react'
import education from '../assets/education.json'

const Home = () => {
    return (
        <div>
            <Lottie animationData={education}></Lottie>
        </div>
    );
};

export default Home;