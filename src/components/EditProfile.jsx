import React,{ useState, useContext, useEffect} from "react";
import { AuthContext } from '../components/AuthProvider';
import { useNavigate } from 'react-router-dom';
import putEditProfile from "../api/put-editProfile";
import PageDesign from '../components/PageDesign.jsx';
import getUser from "../api/get-user";

function EditProfile(){
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        bio: "",
        profile_pic: "",
    });

        useEffect(() => {
            if (auth.user_id) {
                getUser(auth.user_id).then((response) => {
                    setUser({
                        username: response.username ?? "",
                        email: response.email ?? "",
                        password: response.password ?? "",
                        first_name: response.first_name ?? "",
                        last_name: response.last_name ?? "",
                        bio: response.bio ?? "",
                        profile_pic: response.profile_pic ?? "",
                    });

            })
                .catch((error) => {
                    console.error("Error fetching user", error);
                });
            }

        }, [auth.user_id]);

        const handleChange = (event) => {
            const { name, value } = event.target;

            setUser((prevUser) => ({
                ...prevUser,
                [name]: value,
            }));
        };

        const handleSubmit = async (event) =>{
            event.preventDefault();
            const updated = await updateUserDetails(auth.user_id, user);
            if(updated){
                navigate(`/profile`);
            } else {
                console.error("Error updating user");
            }
        };

        return (
            <PageDesign>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center py-6 mt-8">
                    <div className="w-1/2 mb-2">
                        <label htmlFor="username" className="block text-md font-medium text-justify text-black">Username:
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                            className="mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        </label>
                    </div>
                    <div className="w-1/2 mb-2">
                        <label htmlFor="email" className="block text-md font-medium text-justify text-black">Email:
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            className="mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        </label>
                    </div>
                    <div className="w-1/2 mb-2">
                        <label htmlFor="first_name" className="block text-md font-medium text-justify text-black">First name:
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={user.first_name}
                            onChange={handleChange}
                            className="mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        </label>
                    </div>
                    <div className="w-1/2 mb-2">
                        <label htmlFor="last_name" className="block text-md font-medium text-justify text-black">Last Name:
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={user.last_name}
                            onChange={handleChange}
                            className="mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        </label>
                    </div>
                    <div className="w-1/2 mb-2">
                        <label htmlFor="bio" className="block text-md font-medium text-justify text-black">Bio:
                        <input
                            type="text"
                            id="bio"
                            name="bio"
                            value={user.bio}
                            onChange={handleChange}
                            className="mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        </label>
                    </div>
                    <div className="w-1/2 mb-2">
                        <label htmlFor="profile_pic" className="block text-md font-medium text-justify text-black">Profile Picture:
                        <input
                            type="text"
                            id="profile_pic"
                            name="profile_pic"
                            value={user.profile_pic}
                            onChange={handleChange}
                            className="mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        </label>
                    </div>
                    <button type="submit" style={{ backgroundColor: '#00bcd4' }} className="mt-3 w-1/2 inline-flex justify-center py-1 px-3 border-spacing-1 text-sm font-serif rounded-md text-black hover:bg-blue-500 focus: ring-2 focus:ring-blue-400">
                        Update Profile

                    </button>
                </form>
            </PageDesign>
        );
    }
    export default EditProfile;




            