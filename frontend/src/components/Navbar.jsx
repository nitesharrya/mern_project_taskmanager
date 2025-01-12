// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { logout } from '../redux/actions/authActions';

// const Navbar = () => {

//   const authState = useSelector(state => state.authReducer);
//   const dispatch = useDispatch();
//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);
//   const toggleNavbar = () => {
//     setIsNavbarOpen(!isNavbarOpen);
//   }

//   const handleLogoutClick = () => {
//     dispatch(logout());
//   }

//   return (
//     <>
//       <header className='flex justify-between sticky top-0 p-4 bg-white shadow-sm items-center'>
//         <h1 className='cursor-pointer uppercase font-medium'>
//           <Link to="/"> Task Manager </Link>
//         </h1>
//         <ul className='hidden md:flex gap-4 uppercase font-medium'>
//           {authState.isLoggedIn ? (
//             <>
//               <li className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-md">
//                 <Link to='/tasks/add' className='block w-full h-full px-4 py-2'> <i className="fa-solid fa-plus"></i> Add task </Link>
//               </li>
//               <li className='py-2 px-3 cursor-pointer hover:bg-gray-200 transition rounded-sm' onClick={handleLogoutClick}>Logout</li>
//             </>
//           ) : (
//             <li className='py-2 px-3 cursor-pointer text-primary hover:bg-gray-100 transition rounded-sm'><Link to="/login">Login</Link></li>
//           )}
//         </ul>
//         <span className='md:hidden cursor-pointer' onClick={toggleNavbar}><i className="fa-solid fa-bars"></i></span>


//         {/* Navbar displayed as sidebar on smaller screens */}
//         <div className={`absolute md:hidden right-0 top-0 bottom-0 transition ${(isNavbarOpen === true) ? 'translate-x-0' : 'translate-x-full'} bg-gray-100 shadow-md w-screen sm:w-9/12 h-screen`}>
//           <div className='flex'>
//             <span className='m-4 ml-auto cursor-pointer' onClick={toggleNavbar}><i className="fa-solid fa-xmark"></i></span>
//           </div>
//           <ul className='flex flex-col gap-4 uppercase font-medium text-center'>
//             {authState.isLoggedIn ? (
//               <>
//                 <li className="bg-blue-500 text-white hover:bg-blue-600 font-medium transition py-2 px-3">
//                   <Link to='/tasks/add' className='block w-full h-full'> <i className="fa-solid fa-plus"></i> Add task </Link>
//                 </li>
//                 <li className='py-2 px-3 cursor-pointer hover:bg-gray-200 transition rounded-sm' onClick={handleLogoutClick}>Logout</li>
//               </>
//             ) : (
//               <li className='py-2 px-3 cursor-pointer text-primary hover:bg-gray-200 transition rounded-sm'><Link to="/login">Login</Link></li>
//             )}
//           </ul>
//         </div>
//       </header>
//     </>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const authState = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  const handleLogoutClick = () => {
    dispatch(logout());
  }

  return (
    <>
      <header className='navbar'>
        <h1 className='logo'>
          <Link to="/">Task Manager</Link>
        </h1>
        <ul className='nav-links'>
          {authState.isLoggedIn ? (
            <>
              <li className="nav-item add-task">
                <Link to='/tasks/add' className='nav-link'><i className="fa-solid fa-plus"></i> Add task </Link>
              </li>
              <li className='nav-item logout' onClick={handleLogoutClick}>Logout</li>
            </>
          ) : (
            <li className='nav-item login'><Link to="/login">Login</Link></li>
          )}
        </ul>
        <span className='hamburger' onClick={toggleNavbar}><i className="fa-solid fa-bars"></i></span>

        {/* Sidebar on smaller screens */}
        <div className={`sidebar ${isNavbarOpen ? 'open' : ''}`}>
          <div className='close-btn'>
            <span className='close-icon' onClick={toggleNavbar}><i className="fa-solid fa-xmark"></i></span>
          </div>
          <ul className='sidebar-links'>
            {authState.isLoggedIn ? (
              <>
                <li className="sidebar-item add-task">
                  <Link to='/tasks/add' className='sidebar-link'><i className="fa-solid fa-plus"></i> Add task </Link>
                </li>
                <li className='sidebar-item logout' onClick={handleLogoutClick}>Logout</li>
              </>
            ) : (
              <li className='sidebar-item login'><Link to="/login">Login</Link></li>
            )}
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar;
