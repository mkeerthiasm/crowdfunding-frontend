import EditProfile from "../components/EditProfile";
import PageDesign from "../components/PageDesign";

function EditProfilePage() {
    return (
            <div>
                <PageDesign>
                    <div className="w-full bg-white border shadow-sm" style={{ borderColor:'#f0f7f7'}}>
                        <h1 className="text-2xl font-sans-bold text-center">Edit Profile</h1>
                    </div>           
                </PageDesign>
                <div>
                    <EditProfile />
                </div>
             </div>
        );
}
export default EditProfilePage;
