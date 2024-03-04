import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postRegister from '../api/post-register.js';
import PageDesign from '../components/PageDesign.jsx';

function Register(){
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        bio: "",
        profile_pic: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;

        setCredentials((prevCredentials)=> ({
            ...prevCredentials,
            [id] : value,
        }));
    };

    const handleSubmit = (event) =>{
    event.preventDefault();
        if (Register.username && Register.email && Register.password && Register.first_name && Register.last_name) {
            postRegister(
                credentials.username,
                credentials.email,
                credentials.password,
                credentials.first_name,
                credentials.last_name,
                credentials.bio,
                credentials.profile_pic
            ).then ((response)=>{
                navigate("/login");
            }).catch((error)=>{
                console.error("Error registering", error); 
            });
        }
    }
    return (
        <PageDesign>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center py-6'> 
                <div className='w-1/2 mb-2'>  
                    <label htmlFor="username" className='block text-md font-medium text-justify text-black'> Username:
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter username"
                        onChange={handleChange}
                        className='mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                    </label>
                </div>
                <div className='w-1/2 mb-2'>  
                    <label htmlFor="email" className='block text-md font-medium text-justify text-black'> Email:
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        className='mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                    </label>
                </div>
                <div className='w-1/2 mb-2'>  
                    <label htmlFor="password" className='block text-md font-medium text-justify text-black'> Password:
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        onChange={handleChange}
                        className='mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                    </label>
                </div>
                <div className='w-1/2 mb-2'>  
                    <label htmlFor="first_name" className='block text-md font-medium text-justify text-black'> First Name:
                    <input
                        type="text"
                        id="first_name"
                        placeholder="Enter first name"
                        onChange={handleChange}
                        className='mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                    </label>
                </div>
                <div className='w-1/2 mb-2'>  
                    <label htmlFor="last_name" className='block text-md font-medium text-justify text-black'> Last Name:
                    <input
                        type="text"
                        id="last_name"
                        placeholder="Enter last name"
                        onChange={handleChange}
                        className='mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                    </label>
                </div>
                <div className='w-1/2 mb-2'>  
                    <label htmlFor="bio" className='block text-md font-medium text-justify text-black'> Bio:
                    <input
                        type="text"
                        id="bio"
                        placeholder="Enter bio"
                        onChange={handleChange}
                        className='mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                    </label>
                </div>
                <div className='w-1/2 mb-2'>  
                    <label htmlFor="profile_pic" className='block text-md font-medium text-justify text-black'> Profile Picture:
                    <input
                        type="text"
                        id="profile_pic"
                        placeholder="Enter profile picture"
                        onChange={handleChange}
                        className='mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                    </label>
                </div>
                <button type="submit" className='w-1/2 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Register</button>
            </form>
        </PageDesign>
    );
}

export default Register;
            
