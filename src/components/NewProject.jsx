import { useState } from "react"; 
import { useNavigate } from 'react-router-dom';
import postNewProject from "../api/post-newProject";    
import PageDesign from '../components/PageDesign.jsx';

function NewProject(){
    const navigate = useNavigate();
    const [NewProject, setNewProject] = useState({
        title: "",
        description: "",
        goal: "",
        image: "",
        is_open: true,
        date_created: new Date().toISOString(),
    });

    const handleChange = (event) => {
        const { id, value } = event.target;

        setNewProject((prevNewProject)=> ({
            ...prevNewProject,
            [id] : value,
        }));
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        try{
            await postNewProject(NewProject);
            navigate("/");
        } catch (error){
            console.error("Error creating project", error);
        }

    };
    return (
        <PageDesign>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center py-7">
                <div className="w-1/2 mb-4">
                    <label htmlFor="title" className="block text-mb font-sans text-black">Add a New Project:</label>
                    <input 
                        type="text" 
                        id="title"
                        placeholder="Enter a title"
                        onChange={handleChange}
                        className="mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                </div>
                <div className="w-1/2 mb-4">
                    <label htmlFor="description" className="block text-mb font-sans text-black">Description:</label>
                    <textarea 
                        id="description"
                        placeholder="Enter a description"
                        onChange={handleChange}
                        className="mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />        

                </div>
                <div className="w-1/2 mb-4">
                    <label htmlFor="goal" className="block text-mb font-sans text-black">Goal:</label>
                    <input 
                        type="number" 
                        id="goal"
                        placeholder="Enter a goal"
                        onChange={handleChange}
                        className="mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                </div>
                <div className="w-1/2 mb-4">
                    <label htmlFor="image" className="block text-mb font-sans text-black">Image:</label>
                    <input 
                        type="text" 
                        id="image"
                        placeholder="Enter an image"
                        onChange={handleChange}
                        className="mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                </div>   
                <div className="w-1/2 mb-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Project</button>   
                </div>          
            </form>
        </PageDesign>
    );
}
export default NewProject;


