import { useDispatch } from 'react-redux';
import { useState,useEffect } from 'react'
import authService  from './appWrite/auth';
import { Outlet } from 'react-router-dom';
import { Footer,Header } from './components/index';
import { login,logout } from './store/authSlice';


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
    authService.getCurrUser().then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout());
      }
    }).finally(()=>{
      setLoading(false);
    })
  },[])

 return !loading ? (
  <div className="min-h-screen flex flex-col bg-gray-400">
    <Header />
    
    <main className="flex-grow flex justify-center items-center">
      <Outlet />
    </main>

    <Footer />
  </div>
) : null;

}

export default App
