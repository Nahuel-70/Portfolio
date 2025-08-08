const Tag = ({ icon, label, className = '', onClick }) => {
  return (
    <div 
      className={`
        bg-blue-500/10 border border-blue-500/30 px-5 py-3 rounded-full text-sm font-semibold
        flex items-center gap-3 transition-all duration-300 backdrop-blur-md text-white
        hover:bg-blue-500/20 hover:-translate-y-1 hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30
        ${onClick ? 'cursor-pointer' : ''}
      `}
      onClick={onClick}
    >
      {icon && (
        <img 
          src={icon} 
          alt={label} 
          className={`w-5 h-5 transition-all duration-300 ${className}`}
        />
      )}
      <span className="uppercase tracking-wider">{label}</span>
    </div>
  );
};

export default Tag;