const Section = ({ title, subtitle, children }) => {
  return (
    <div className="text-center">
      {title && (
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gradient-accent uppercase tracking-wider">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-center text-gray-300 text-xl mb-16 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default Section;