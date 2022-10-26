import React from 'react';
import {Link} from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <div className='ml-40 mr-40 mt-20 md:mx-96'>
            <div className="">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Please enter your full name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Please enter your email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password carefully.</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Confirm Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="******************" />
                    </div>

                    <button className="mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Register
                        </button>
                        <p className='text-sm'>Already have an account? Please <Link to= '/login' className='font-bold  text-blue-500 hover:text-blue-800'>Login</Link></p>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2022 EduHub. All rights reserved.
                </p>
            </div>
        </div>
        </div>
    );
};

export default Register;