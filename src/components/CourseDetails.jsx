import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNavbar from './LeftSideNavbar';

const CourseDetails = () => {
    const details = useLoaderData()
    const {id, fee, picture, name, instructor, about, duration } = details
    return (
        <div className='flex m-5'>
            <div className='grow-0 mr-3'>
                <LeftSideNavbar></LeftSideNavbar>
            </div>
            <div className='grow'>
                <div className='grid grid-cols-2'>
                    <div>
                        <img src={picture} alt="" />
                        <h2>{name}</h2>
                        <p>{instructor}</p>
                        <p><small>Duration: {duration} months</small></p>
                        <p><small>{fee}</small></p>
                    </div>
                    <div className='my-auto mx-5'>
                        <h3>{about}</h3>
                        <button className="btn btn-wide btn-primary mt-5"><Link to={`/courses/${id}/checkout`}>Checkout</Link><FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;