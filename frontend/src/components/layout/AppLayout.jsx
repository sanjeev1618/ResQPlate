import TopNavbar from "./TopNavBar";
import Sidebar from "./SideBar";
import BottomNav from "./BottomNav";

const AppLayout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <TopNavbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>

      <BottomNav />
    </div>
  );
};

export default AppLayout;
