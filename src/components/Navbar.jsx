import React from 'react'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Dropdown from './Dropdown';


const Navbar = () => {


  return (
    <div>
      <nav className="bg-blue border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo and brand name */}
          <a href="https://flowbite.com/" className="decoration-no flex items-center space-x-3">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="text-2xl font-semibold whitespace-nowrap text-white">My Store</span>
          </a>

          {/* Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="decoration-no py-2 px-3 text-albin bg-blue-700 rounded" aria-current="page">Home</a>
            <a href="#" className="decoration-no py-2 px-3 text-albin bg-blue-700 rounded" aria-current="page">About</a>
            <a href="#" className="decoration-no py-2 px-3 text-albin bg-blue-700 rounded" aria-current="page">Contact</a>
          </div>

          {/* User profile */}
          <div>
            <Dropdown />
          </div>


        </div>
      </nav>
    </div>

  )
}

export default Navbar








