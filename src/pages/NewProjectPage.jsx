import NewProject from "../components/NewProject";
import PageDesign from "../components/PageDesign";

function NewProjectPage() {
    return (
        <div>
            <PageDesign>
                <div className="w-full bg-white border shadow-sm" style={{ borderColor:'#f0f7f7'}}>
                    <h1 className="text-2xl font-sans-bold text-center">New Project</h1>
                </div>           
            </PageDesign>
            <div>
                <NewProject />
            </div>
        </div>
    );
}
export default NewProjectPage;