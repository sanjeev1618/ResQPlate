const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 bg-white border-r min-h-screen p-5">
      <nav className="space-y-4">
        <button className="block w-full text-left font-medium text-green-600">
          Dashboard
        </button>
        <button className="block w-full text-left text-gray-600 hover:text-green-600">
          My Donations
        </button>
        <button className="block w-full text-left text-gray-600 hover:text-green-600">
          History
        </button>
        <button className="block w-full text-left text-gray-600 hover:text-green-600">
          Help
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
