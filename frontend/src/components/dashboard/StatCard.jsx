const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
      <p className="text-gray-500 text-sm mb-1">{title}</p>
      <h3 className="text-3xl font-bold text-green-600">{value}</h3>
    </div>
  );
};

export default StatCard;
