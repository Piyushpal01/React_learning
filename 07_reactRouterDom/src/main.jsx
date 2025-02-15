import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import Myparams from './Components/Myparams/Myparams.jsx'
import Github, {githubInfoLoader} from './Components/Github/Github.jsx'

// 1st way to create router 
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <App />,
//     children:[
//       {
//         path:'',
//         element: <Home />
//       },
//       {
//         path:'/About',
//         element:<About />
//       },
//       {
//         path:"/Contact-us",
//         element:<ContactUs/>
//       }
//     ]
//   }
// ])

// 2nd and most preferred to way to create Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact-Us' element={<ContactUs />} />
      {/* Now capturing parameter after the slash in url, myparams ke slash ke baad jo bhi aae isi me url s val aegi */}
      <Route path='myparams/:id' element={<Myparams/>} />
      
      {/* loader is used whenever we want to fetch data. We can fetch api call directly , what it does is that whenever u hover or bring the cursor over the ele it start the fetching before even click so it optimize it more, nd once it is fetchd it is kept in catch. */}
      <Route
      loader={githubInfoLoader}
      path='/github' 
      element={<Github />}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
