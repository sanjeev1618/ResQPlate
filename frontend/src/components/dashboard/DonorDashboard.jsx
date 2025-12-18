import DonationCard from "./DonationCard";
import StatCard from "./StatCard";

const DonorDashboard = () => {
  const donations = [
    {
      id: 1,
      foodTitle: "Veg Biryani",
      quantity: "For 20 people",
      status: "available",
      expiryTime: "Today, 9:00 PM",
      location: "Sector 21, Noida",
    },
    {
      id: 2,
      foodTitle: "Paneer Butter Masala",
      quantity: "For 15 people",
      status: "claimed",
      expiryTime: "Today, 8:30 PM",
      location: "DLF Phase 3, Gurgaon",
    },
    {
      id: 3,
      foodTitle: "Chapati & Dal",
      quantity: "For 10 people",
      status: "completed",
      expiryTime: "Yesterday",
      location: "Indirapuram, Ghaziabad",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

    {/* DASHBOARD NAVBAR */}
      <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">
          ResQPlate
        </h1>

        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">
            Hi, Donor!
          </span>

          <button
  className="bg-red-500 text-white px-4 py-1.5 rounded-lg font-semibold
             hover:bg-red-600 transition duration-200"
>
  Logout
</button>

        </div>
      </header>


      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 space-y-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome, Donor!
            </h1>
            <p className="text-gray-500 mt-1">
              Manage your food donations and impact
            </p>
          </div>

          <button className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700">
            + Post Food
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <StatCard title="Total Donations" value="24" />
          <StatCard title="Meals Saved" value="550+" />
          <StatCard title="NGOs Helped" value="15" />
        </div>

        {/* Recent Donations */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Recent Donations
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donations.map((donation) => (
              <DonationCard
                key={donation.id}
                donation={donation}
              />
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 border-t border-gray-200 py-4 text-center text-white">
  <p className="text-sm text-white-600">
    Thank you for being a part of{" "}
    <span className="font-semibold tracking-tight font-sans ">
        ResQ<span className="text-green-600">Plate</span>
      </span>
    — every donation helps reduce food waste.
  </p>
</footer>

    </div>
  );
};

export default DonorDashboard;
