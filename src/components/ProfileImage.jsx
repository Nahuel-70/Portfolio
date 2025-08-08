const ProfileImage = ({ src, alt, size = 'large', className = '' }) => {
  const sizes = {
    large: 'w-80 h-80',
    medium: 'w-48 h-48',
    small: 'w-32 h-32'
  };

  const shadows = {
    large: 'shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50',
    medium: 'shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50',
    small: 'shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50'
  };

  return (
    <div className={`mb-12 ${sizes[size]} ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full rounded-full object-cover gradient-primary transition-all duration-500 hover:scale-110 hover:rotate-6 ${shadows[size]}`}
      />
    </div>
  );
};

export default ProfileImage;