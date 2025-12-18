const DonationCard = ({ location, food, time }) => {
  return (
    <div className="border rounded-xl p-5 rounded-xl hover:shadow-md">
      <h3 className="font-semibold">{location}</h3>
      <p className="text-gray-600">{food}</p>
      <p className="text-sm text-gray-500">{time}</p>

      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg">
        Accept Pickup
      </button>
    </div>
  );
};

export default DonationCard;
