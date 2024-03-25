
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import logoas from '../assets/icons/logo.png'


const Navbar = ({refFunction}) => {

  const handleClick = (active) =>{
    refFunction(active)
  }

  return (
    <div>
      <nav className="bg-blue border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo and brand name */}
          <a className="decoration-no flex items-center space-x-3">
            <img src={logoas} className="h-8" alt="Flowbite Logo" />
            <span className="text-2xl font-semibold whitespace-nowrap text-white">My Store</span>
          </a>

          {/* Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a onClick={() =>handleClick(0)} className="decoration-no py-2 px-3 text-albin bg-blue-700 rounded" >Dashboard</a>
            <a onClick={() =>handleClick(1)} className="decoration-no py-2 px-3 text-albin bg-blue-700 rounded" >Password Manager</a>
            <Link className="decoration-no py-2 px-3 text-albin bg-blue-700 rounded" to="/data-table" >Viewer</Link>
            <a onClick={() =>handleClick(3)} className="decoration-no py-2 px-3 text-albin bg-blue-700 rounded" >Login</a>
            <a onClick={() =>handleClick(4)} className="decoration-no py-2 px-3 text-albin bg-blue-700 rounded" >Register</a>
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








