const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center mb-20">
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              relative px-6 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300
              rounded-full border-2 flex items-center gap-3 whitespace-nowrap outline-none select-none
              ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white border-transparent scale-105 shadow-glow'
                  : 'bg-transparent text-text-secondary border-dark-border hover:text-text-primary hover:border-primary/50 hover:bg-primary/10 hover:scale-105'
              }
            `}
          >
            
            {tab.icon && (
              <div className={`w-6 h-6 transition-all duration-300 ${
                activeTab === tab.id ? 'text-white' : 'text-text-muted'
              }`}>
                {tab.icon}
              </div>
            )}
            
            {tab.label}
            
            {/* Active indicator dot
            {activeTab === tab.id && (
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            )} */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;