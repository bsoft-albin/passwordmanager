import React, { useState, useEffect, useRef } from 'react';



const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <img
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="w-10 h-10 rounded-full cursor-pointer"
        src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png"
        alt="User dropdown"
        onClick={handleDropdownToggle}
      />

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
  id="userDropdown"
  className="user-menu z-10 bg-green divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
>
  <ul className="space-y-2 py-2 list-dot-no user-menu-lftpading">
    <li className="text-gray-800 dark:text-gray-200 ml-5">Settings</li>
    <li className="text-gray-800 dark:text-gray-200 ml-5">Profile</li>
    <li className="text-gray-800 dark:text-gray-200 ml-5">Toolbar</li>
    <hr className="border-gray-200 dark:border-gray-600" />
    <li className="text-gray-800 dark:text-gray-200 ml-5">Logout</li>
  </ul>
</div>
      )}
    </div>
  );
};

export default Dropdown;
