import Tag from './Tag';

const SkillCard = ({ icon, title, description, tags, gradientIndex = 0 }) => {
  const gradients = [
    'gradient-primary',
    'gradient-secondary', 
    'gradient-tertiary'
  ];

  const hoverStyles = [
    'hover:border-primary hover:bg-[rgba(20,25,40,0.95)] hover:shadow-2xl hover:shadow-black/40',
    'hover:border-secondary hover:bg-[rgba(20,25,40,0.95)] hover:shadow-2xl hover:shadow-black/40',
    'hover:border-tertiary hover:bg-[rgba(20,25,40,0.95)] hover:shadow-2xl hover:shadow-black/40'
  ];

  const iconGlowColors = [
    'var(--primary-color)',
    'var(--secondary-color)',
    'var(--tertiary-color)'
  ];

  const currentGradient = gradients[gradientIndex % gradients.length];
  const currentHoverStyle = hoverStyles[gradientIndex % hoverStyles.length];
  const currentIconGlow = iconGlowColors[gradientIndex % iconGlowColors.length];

  return (
    <div className={`glass-bg rounded-3xl p-10 transition-all duration-500 relative overflow-hidden cursor-pointer z-10 group hover:-translate-y-1 hover:scale-105 animation-projectCard ${currentHoverStyle}`}>
      {/* Top gradient line */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${currentGradient} transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100 z-20`} />
      
      {/* Header */}
      <div className="flex items-center gap-5 mb-8">
        <img 
          src={icon} 
          alt={title} 
          className="w-12 h-12 transition-all duration-400 filter brightness-0 invert group-hover:scale-125 group-hover:rotate-12"
          style={{
            filter: `brightness(0) invert(1)  drop-shadow(0 0 10px ${currentIconGlow})`,
            transition: 'all 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = `brightness(0) invert(1) drop-shadow(0 0 10px ${currentIconGlow})`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'brightness(0) invert(1)';
          }}
        />
        <h3 className="text-2xl font-extrabold text-white uppercase tracking-wider">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-4">
          {tags.map((tag, tagIndex) => (
            <Tag
              key={tagIndex}
              icon={tag.icon}
              label={tag.label}
              className={tag.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;