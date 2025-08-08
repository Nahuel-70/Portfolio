const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '', ...props }) => {
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center gap-3 font-semibold tracking-wide transition-all duration-300 rounded-2xl border-2 group";
  
  const sizes = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg"
  };

  const variants = {
    primary: `
      gradient-primary
      border-transparent text-white
      hover:from-blue-600 hover:to-primary 
      hover:scale-105 hover:shadow-glow
      active:scale-95
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
      before:translate-x-[-100%] before:skew-x-12 before:transition-transform before:duration-700
      hover:before:translate-x-[200%]
    `,
    
    secondary: `
      transparent
      border-accent text-white
      hover:from-emerald-600 hover:to-secondary 
      hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]
      active:scale-95
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
      before:translate-x-[-100%] before:skew-x-12 before:transition-transform before:duration-700
      hover:before:translate-x-[200%]
    `,
    
    outline: `
      bg-transparent border-border text-text-primary
      hover:bg-white/10 hover:border-primary hover:text-primary
      hover:scale-105 hover:shadow-glow
      active:scale-95
      backdrop-blur-sm
    `,
    
    ghost: `
      bg-transparent border-transparent text-text-secondary
      hover:bg-dark-surface hover:text-text-primary
      hover:scale-105
      active:scale-95
    `,
    
    accent: `
      bg-gradient-to-r from-accent to-purple-600 
      border-transparent text-white
      hover:from-purple-600 hover:to-accent 
      hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]
      active:scale-95
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
      before:translate-x-[-100%] before:skew-x-12 before:transition-transform before:duration-700
      hover:before:translate-x-[200%]
    `,
    
    danger: `
      bg-gradient-to-r from-danger to-red-600 
      border-transparent text-white
      hover:from-red-600 hover:to-danger 
      hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]
      active:scale-95
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
      before:translate-x-[-100%] before:skew-x-12 before:transition-transform before:duration-700
      hover:before:translate-x-[200%]
    `
  };

  return (
    <button
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
      </span>
    </button>
  );
};

export default Button;