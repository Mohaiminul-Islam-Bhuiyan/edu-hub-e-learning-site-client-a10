import React from 'react';
import { Link } from 'react-router-dom';
import CourseDetails from './CourseDetails';

const Course = ({ course }) => {
    const { id, fee, picture, name, instructor } = course
    return (
        <div>
            <div>

            </div>

            <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-2 pt-2">
                    <img src={picture} alt="Courses" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{instructor}</p>
                    <p>${fee}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"><Link to={`/courses/${id}`} >See Details </Link></button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Course;