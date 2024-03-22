
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';


const Navbar = ({refFunction}) => {

  const handleClick = (active) =>{
    refFunction(active)
  }

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
            <Link onClick={() =>handleClick(0)} className="decoration-no py-2 px-3 text-albin bg-blue-700 rounded" >Dashboard</Link>
            <Link onClick={() =>handleClick(1)} className="decoration-no py-2 px-3 text-albin bg-blue-700 rounded" >Password Manager</Link>
            <Link onClick={() =>handleClick(2)} className="decoration-no py-2 px-3 text-albin bg-blue-700 rounded" to="/data-table" >Viewer</Link>
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








