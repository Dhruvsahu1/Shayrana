import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'  
import store from './store/store.js'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import {AuthLayout, Login} from './components/index.js'
import SignUp from './components/SignUp.jsx'
import Allposts from './pages/Allposts.jsx'
import Addpost from './pages/Addpost.jsx'
import Editpost from './pages/Editpost.jsx'
import Home from './pages/Home.jsx'
import Post from './pages/Post.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path:"/login",
        element:(
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path:"/signup",
        element:(
          <AuthLayout authentication={false}>
            <SignUp/>
          </AuthLayout>
        )
      },
      {
        path:"/all-posts",
        element:(
          <AuthLayout authentication>
            {" "}
            <Allposts/>
          </AuthLayout>
        )
      },
      {
        path:"/add-post",
        element:(
          <AuthLayout authentication>
            {" "}
            <Addpost/>
          </AuthLayout>
        )
      },
      {
        path:"/edit-posts/:slug",
        element:(
          <AuthLayout authentication>
            {" "}
            <Editpost/>
          </AuthLayout>
        )
      },
      {
        path: "/post/:slug",
        element: <Post />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store= {store}>
     <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
