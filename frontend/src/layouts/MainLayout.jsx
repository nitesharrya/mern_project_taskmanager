// import React from 'react'
// import Navbar from '../components/Navbar';

// const MainLayout = ({ children }) => {
//   return (
//     <>
//       <div className='relative bg-gray-50 h-screen w-screen overflow-x-hidden'>
//         <Navbar />
//         {children}
//       </div>
//     </>
//   )
// }

// export default MainLayout;

import React from 'react';
import Navbar from '../components/Navbar';
import './MainLayout.css'; // Import the CSS file

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="main-content">{children}</div>
    </div>
  );
};

export default MainLayout;
