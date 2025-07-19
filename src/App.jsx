import { useDispatch } from 'react-redux';
import { useState,useEffect } from 'react'
import { authService } from './appWrite/auth';
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

  return !loading ?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main className='w-full flex justify-center items-center'>
          Todo : <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ):null;
}

export default App
