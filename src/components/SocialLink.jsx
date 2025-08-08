const SocialLink = ({ href, icon, label, className = '' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-4 px-6 py-4 text-white transition-transform duration-300 hover:-translate-y-2 group"
    >
      <img
        src={icon}
        alt={label}
        className={`w-10 h-10 transition-all duration-300 group-hover:scale-110 ${className}`}
      />
      <span className="text-sm font-semibold uppercase tracking-wider text-text-primary group-hover:text-text-primary">
        {label}
      </span>
    </a>
  );
};

export default SocialLink;