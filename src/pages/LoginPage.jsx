import LoginForm from "../components/LoginForm";
import PageDesign from "../components/PageDesign";

function LoginPage() {
   return (
         <div>
            <PageDesign>
                  <div className="w-full bg-white border shadow-sm" style={{ borderColor:'#f0f7f7'}}>
                     <h1 className="text-2xl font-sans-bold text-center">Login</h1>
                  </div>           
            </PageDesign>
            <div>
                  <LoginForm />
            </div>
         </div>
   )
}

export default LoginPage;