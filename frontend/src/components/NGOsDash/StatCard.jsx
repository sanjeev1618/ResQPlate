const StatCard = ({ title, value, color }) => {
  return (
    <div className="bg-white p-5 rounded-xl border shadow shadow-lg">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className={`text-3xl font-bold text-${color}-600`}>
        {value}
      </h3>
    </div>
  );
};

export default StatCard;
