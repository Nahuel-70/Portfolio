import Tag from './Tag';

const ProjectCard = ({ title, image, description, tags, gradientIndex = 0 }) => {
  const hoverColors = [
    'hover:border-primary/50',
    'hover:border-secondary/50',
    'hover:border-accent/50'
  ];

  const titleGradients = [
    'bg-gradient-to-r from-primary to-blue-600',
    'bg-gradient-to-r from-secondary to-emerald-600',
    'bg-gradient-to-r from-accent to-purple-600'
  ];

  const currentHoverColor = hoverColors[gradientIndex % hoverColors.length];
  const currentTitleGradient = titleGradients[gradientIndex % titleGradients.length];

  return (
    <div className={`
      bg-dark-card/60 backdrop-blur-sm rounded-3xl transition-all duration-500 relative overflow-hidden cursor-pointer group 
      hover:-translate-y-6 hover:scale-105 animate-projectCard border border-dark-border
      ${currentHoverColor} hover:shadow-2xl hover:shadow-black/50
    `}>
      {/* Project Image */}
      <div className="relative w-full h-80 overflow-hidden rounded-t-3xl bg-gradient-to-br from-black/30 to-black/10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Title in bottom left */}
        <div className="absolute bottom-6 left-6 z-20">
          <h3 className={`
            text-2xl font-bold uppercase tracking-wider text-white
            ${currentTitleGradient} bg-clip-text text-transparent
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-all duration-300
            group-hover:scale-105
          `}>
            {title}
          </h3>
        </div>
      </div>

      {/* Content - Organized in Column */}
      <div className="p-8 space-y-6">
        {/* Description */}
        <div>
          <p className="text-text-secondary leading-relaxed text-base">
            {description}
          </p>
        </div>

        {/* Tags - Using Tag Component */}
        <div>
          {/* <h4 className="text-text-muted text-xs uppercase tracking-wider font-semibold mb-4 opacity-70">
            Technologies
          </h4> */}
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, tagIndex) => (
              <div
                key={tagIndex}
                className={`
                  bg-dark-surface/60 border border-dark-border px-3 py-2 rounded-full text-xs font-semibold
                  flex items-center gap-2 transition-all duration-300 backdrop-blur-md text-text-secondary
                  hover:bg-primary/20 hover:border-primary/50 hover:text-primary hover:-translate-y-1 hover:scale-105
                `}
              >
                {tag.icon && (
                  <img 
                    src={tag.icon} 
                    alt={tag.label} 
                    className={`w-4 h-4 transition-all duration-300 ${tag.className || ''}`}
                  />
                )}
                <span className="uppercase tracking-wider">{tag.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Area */}
        <div className="pt-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm group/btn">
              <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Project
            </button>
            
            <button className="flex items-center gap-2 text-text-muted hover:text-secondary transition-colors text-sm group/btn">
              <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Source Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;