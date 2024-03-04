import { useState } from "react";
import postPledge from "../api/post-pledge";

function NewPledge({projectId}){
    const [pledgeAmount, setPledgeAmount] = useState(0);
    const [pledgeComment, setPledgeComment] = useState('');
    const [anonymous, setAnonymous] = useState(false);  

   const handlePledgeSubmit = async (event) => {
        event.preventDefault();
        try {
            await postPledge(
                projectId,
                pledgeAmount,
                anonymous,
                pledgeComment
            );
            navigate(`/projects/${projectId}`);
        } catch (error) {
            console.error("Error pledging", error);
        }
        location.reload();
        
    };
    return (
        <div className="mt-2">
            <h3 className="text-m font-sans">Make a Pledge</h3>
            <form onSubmit={handlePledgeSubmit} className="flex flex-col items-center justify-center py-6">
                <div className="w-1/2 mb-2">
                    <label htmlFor="pledgeAmount" className="block text-md font-medium text-justify text-black">Pledge Amount:</label>
                    <input
                        type="number"
                        id="pledgeAmount"
                        value={pledgeAmount}
                        onChange={(event) => setPledgeAmount(event.target.value)}
                        className="mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div className="w-1/2 mb-2">
                    <label htmlFor="pledgeComment" className="block text-md font-medium text-justify text-black">Comment:</label>   
                    <textarea
                        id="pledgeComment"
                        value={pledgeComment}
                        onChange={(event) => setPledgeComment(event.target.value)}
                        className="mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div className="w-1/2 mb-2">
                    <label htmlFor="anonymous" className="block text-md font-medium text-justify text-black">Anonymous:</label>
                    <input
                        type="checkbox"
                        id="anonymous"
                        checked={anonymous}
                        onChange={(event) => setAnonymous(event.target.checked)}
                        className="mt-0.5 block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div className="w-1/2 mb-2">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pledge</button>
                </div>
            </form>
        </div>
    );
  }      

                    
export default NewPledge;