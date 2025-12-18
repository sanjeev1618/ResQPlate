import StatCard from "./StatCard";
import DonationCard from "./DonationCard";

const NgoDashboard = () => {
  return (
    <div className="space-y-8">

      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome, NGO Partner 👋
        </h1>
        <p className="text-gray-600 mt-2">
          View available food donations and manage your pickups efficiently.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Available Donations " value="12" color="green" />
        <StatCard title="Accepted Today" value="5" color="blue" />
        <StatCard title="Completed Pickups" value="128" color="emerald" />
        <StatCard title="Pending Pickups" value="3" color="yellow" />
      </div>

      {/* Available Donations */}
      <section className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Available Food Donations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <DonationCard
            location="Hotel GreenLeaf"
            food="Veg Meals (30 plates)"
            time="Pickup before 8 PM"
          />
          <DonationCard
            location="Event Hall Royal"
            food="Snacks & Juice (50 packs)"
            time="Pickup before 7 PM"
          />
          <DonationCard
            location="ABC Restaurant"
            food="Cooked Rice & Curry"
            time="Pickup before 9 PM"
          />
        </div>
      </section>

      {/* Pickup Requests */}
      <section className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Your Pickup Requests
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="py-2">Donor</th>
                <th>Food</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">Hotel GreenLeaf</td>
                <td>Veg Meals</td>
                <td className="text-yellow-600 font-medium">Pending</td>
                <td>
                  <button className="text-green-600 font-semibold hover:underline">
                    Track
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-3">Royal Events</td>
                <td>Snacks</td>
                <td className="text-green-600 font-medium">Completed</td>
                <td>
                  <button className="text-gray-400 cursor-not-allowed">
                    Done
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer Message */}
      <footer className="bg-gray-900 text-center border-gray-200 py-4 text-sm text-white pt-6">
        Together, we’re ensuring food reaches those who need it most 🤝
      </footer>

    </div>
  );
};

export default NgoDashboard;
