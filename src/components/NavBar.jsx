import {Link, Outlet} from 'react-router-dom';  
import { useAuth} from '../hooks/use-auth';




function NavBar() {
  const {auth, setAuth} = useAuth();  

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setAuth({ token: null });
  };
  return (
      <div className='flex justify-between items-center bg-blue-500 p-4'>
        <div className='pt-3 pb-2 px-4 text-center'>
          <img src="/public/images/kindlyfund_logo.png" alt="Logo" className='w-auto' />
        </div>
        <nav className='flex flex-col items-center justify-center mt-8'>
            <link to='/' className='py-2 text-sm text-black hover:bg-transparent-100'>Home</link> 
            <link to='/' className='py-2 text-sm text-black hover:bg-transparent-100'>About Us</link>   
            <link to='/' className='py-2 text-sm text-black hover:bg-transparent-100'>Get in touch</link>
            {auth.token ? (
              <>
                <button onClick={handleLogout} className='py-2 text-sm text-black hover:bg-transparent-100'>Logout</button>
                <link to='/newproject' className='py-2 text-sm text-black hover:bg-transparent-100'>Add Project</link>
                <link to='/profile' className='py-2 text-sm text-black hover:bg-transparent-100'>Profile</link> 
                <link to='/' onClick={handleLogout} className='py-2 text-sm text-black hover:bg-transparent-100'>Logout</link>
                </>
            ) : (
              <>
                <link to='/login' className='py-2 text-sm text-black hover:bg-transparent-100'>Login</link>
                <link to='/register' className='py-2 text-sm text-black hover:bg-transparent-100'>Register</link>
              
              </>    
            )}
          
        </nav>
        <div className='py-2 text-center text-sm' style={{ color:'whitesmoke'}}>Keerthi

        </div>
        <div className='flex-auto'>
            <Outlet />
        </div>
      
    </div>
  );
}






export default NavBar;