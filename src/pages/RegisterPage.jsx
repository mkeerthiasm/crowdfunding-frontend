import Register from "../components/Register";
import PageDesign from "../components/PageDesign";

function RegisterPage() {
    return (
        <div>
            <PageDesign>
                <div className="w-full bg-white border shadow-sm" style={{ borderColor:'#f0f7f7'}}>
                    <h1 className="text-2xl font-sans-bold text-center">Register</h1>
                </div>           
            </PageDesign>
            <div>
                <Register />
            </div>
        </div>
    );
}
export default RegisterPage;