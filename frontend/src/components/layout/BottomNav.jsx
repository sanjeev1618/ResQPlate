const BottomNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3">
      <button>🏠</button>
      <button>🔍</button>
      <button className="text-green-600 font-bold">➕</button>
      <button>🔔</button>
      <button>👤</button>
    </nav>
  );
};

export default BottomNav;
