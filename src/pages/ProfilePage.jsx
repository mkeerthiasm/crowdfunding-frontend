import React, { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/use-user";
import PageDesign from "../components/PageDesign.jsx";
import Profile from "../components/Profile.jsx";
import EditProfile from "../components/EditProfile.jsx";
import '../index.css';


function ProfilePage() {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const { user, isLoading, error } = useUser(auth.user_id);
    
    if (isLoading) {
        return <PageDesign>Loading...</PageDesign>;
    }
    if (error) {
        return <PageDesign>Error: {error.message}</PageDesign>;
    }
    if (!auth.token) {
        navigate("/login");
    }
    
    return (
        <PageDesign>
        <div className='flex flex-col items-center justify-center py-6'>
            <h1 className='text-4xl font-bold text-center'>Profile</h1>
            <Profile user={user} />
            
        </div> 
        <div className="flex flex-row items-center w-full gap-5">
            <div className="flex-initial w-80 rounded-full overflow-hidden" style={{borderColor:'#f0f7f7', boxShadow:' 0 2px 3px -1px'}}>
                <img className="w-full" src={user.profile_pic} alt="profile pic" />         
            </div>
            <div className="flex-initial w-1/2 bg-white border shadow-sm" style={{ borderColor:'#f0f7f7'}}>
                <span className="text-2xl font-sans-bold text-center">Username: </span> {user.username}
            </div>
            <div className="flex-initial w-1/2 bg-white border shadow-sm" style={{ borderColor:'#f0f7f7'}}>
                <span className="text-2xl font-sans-bold text-center">Email: </span> {user.email}
            </div>
            <div className="flex-initial w-1/2 bg-white border shadow-sm" style={{ borderColor:'#f0f7f7'}}>
                <span className="text-2xl font-sans-bold text-center">First Name: </span> {user.first_name}
            </div>
            <div className="flex-initial w-1/2 bg-white border shadow-sm" style={{ borderColor:'#f0f7f7'}}>
                <span className="text-2xl font-sans-bold text-center">Last Name: </span> {user.last_name}
            </div>
            <div className="flex-initial w-1/2 bg-white border shadow-sm" style={{ borderColor:'#f0f7f7'}}>
                <span className="text-2xl font-sans-bold text-center">Bio: </span> {user.user_description}
            </div>
            <div className="flex-initial w-1/2 bg-white border shadow-sm" style={{ borderColor:'#f0f7f7'}}>
                <span className="text-2xl font-sans-bold text-center">Created On: </span> {new Date(user.date_joined).toLocaleDateString()}
            </div>
            <button 
               onClick={() => navigate('/edit-profile')}
               style={{ background : '#f0f7f7' }}
               className= "mt-3 w-1/2 inline-flex justify-center py-1 px-3 border-spacing-1 text-sm font-serif rounded-md text-black hover:bg-blue-500 focus: ring-2 focus:ring-blue-400">
                Edit Profile

            </button>

            </div>

        </PageDesign>
    );
    }
    export default ProfilePage;