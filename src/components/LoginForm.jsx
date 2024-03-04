import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postLogin from '../api/post-login.js';
import { useAuth } from '../hooks/use-auth.js';
import PageDesign from './PageDesign.jsx';

function LoginForm(){
    const navigate = useNavigate();

    const {auth, setAuth} = useAuth();

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
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

        if(credentials.username && credentials.password) {
            postLogin(
                credentials.username,
                credentials.password
            ).then ((response)=>{
                window.localStorage.setItem("token", response.token);
                window.localStorage.setItem("user_id",response.user_id);

                setAuth({
                    token: response.token,
                    user_id: response.user_id,
                })
                navigate("/");
            }).catch((error)=>{
                console.error("Error logging in", error); 
            });
        }
    };

 
    return (
        <PageDesign>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center py-6'> 
            <div className='w-1/2 mb-2'>  
                <label htmlFor="username" className='block text-md font-medium text-justify text-black'> Username:</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                    className='mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
               />
            
            </div>
            <div className='w-1/2 mb-2'>  
                <label htmlFor="password" className=''>Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className='mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                 />
                
            </div>
            <div>
                <button type="submit" onClick={handleSubmit} style={{backgroundColor: 'whitesmoke'}} className='mt-2 w-1/2 inline-flex justify-center py-3 px-4 border-transparent text-sm font-serif rounded-md text-black bg-blue-500 hover:bg-blue-600 focus:outline-none focu ring-2 focus: ring-inherit focus:ring-blue-400'>
                    Log in
                </button>
            </div>
        </form>
        </PageDesign>
    );
}

export default LoginForm;