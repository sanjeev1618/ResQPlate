const DonationCard = ({ donation }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-gray-800">
            {donation.foodTitle}
          </h3>
          <p className="text-sm text-gray-500">
            Quantity: {donation.quantity}
          </p>
        </div>

        {/* Status Badge */}
        <span
          className={`text-xs px-3 py-1 rounded-full font-semibold
            ${
              donation.status === "available"
                ? "bg-green-100 text-green-700"
                : donation.status === "claimed"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-gray-200 text-gray-600"
            }`}
        >
          {donation.status.toUpperCase()}
        </span>
      </div>

      {/* Info */}
      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p>⏰ Expires at: {donation.expiryTime}</p>
        <p>📍 Pickup Location: {donation.location}</p>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        {/* NEW OPTION */}
        <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition">
          View Details
        </button>

        {/* Existing Option */}
        {donation.status === "available" && (
          <button className="flex-1 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition">
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default DonationCard;

