const TopNavbar = () => {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold text-green-600">
        ResQPlate
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Notifications */}
        <button className="relative text-gray-600 hover:text-green-600">
          🔔
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
            2
          </span>
        </button>

        {/* Profile */}
        <div className="relative group">
          <button className="font-medium text-gray-700">
            Hi, Donor ⌄
          </button>

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md hidden group-hover:block">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-50">
              My Profile
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-50">
              Settings
            </button>
            <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-50">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
