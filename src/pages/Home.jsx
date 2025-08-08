import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = ({ isMobile, onLanguageChange }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
    if (onLanguageChange) onLanguageChange();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getCurrentFlag = () => {
    switch (i18n.language) {
      case 'es':
        return '🇪🇸';
      case 'en':
      default:
        return '🇺🇸';
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className={`text-lg flex items-center gap-2 hover:scale-110 transition-transform ${
          isMobile ? 'justify-center w-full py-2' : ''
        }`}
      >
        {getCurrentFlag()}
        <span className="text-sm uppercase">{i18n.language}</span>
      </button>

      {open && (
        <ul className={`absolute ${isMobile ? 'left-0' : 'right-0'} mt-2 bg-dark-bg border border-dark-border rounded shadow-lg w-40 text-sm z-50`}>
          <li>
            <button
              onClick={() => changeLanguage('en')}
              className="flex items-center gap-2 w-full px-4 py-2 hover:bg-dark-border"
            >
              🇺🇸 <span>English</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => changeLanguage('es')}
              className="flex items-center gap-2 w-full px-4 py-2 hover:bg-dark-border"
            >
              🇪🇸 <span>Español</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

const HamburgerIcon = ({ isOpen }) => (
  <div className="flex flex-col w-6 h-6 justify-center items-center">
    <span 
      className={`bg-text-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
        isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
      }`}
    />
    <span 
      className={`bg-text-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
        isOpen ? 'opacity-0' : 'opacity-100'
      }`}
    />
    <span 
      className={`bg-text-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
        isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
      }`}
    />
  </div>
);

const Header = () => {
  const { t } = useTranslation();
  const [activeSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: sectionId === 'about' ? 'center' : 'start'
      });
    }
    // Cerrar el menú móvil después de navegar
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { id: 'about', label: t('header.about') },
    { id: 'skills', label: t('header.skills') },
    { id: 'projects', label: t('header.projects') },
    { id: 'contact', label: t('header.contact') },
  ];

  return (
    <header
      id="header"
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-dark-border transition-all duration-300"
    >
      <nav className="py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer z-10"
          >
            NAHUEL
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 items-center">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-semibold uppercase tracking-wider transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                      : 'text-text-secondary hover:text-text-primary hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]'
                  }`}
                >
                  {item.label}
                  <span 
                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-accent rounded transition-all duration-300 ${
                      activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </button>
              </li>
            ))}
            <li>
              <LanguageSwitcher isMobile={false} />
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden z-10 p-2 rounded-lg hover:bg-dark-border transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <HamburgerIcon isOpen={mobileMenuOpen} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-80 bg-dark-card border-l border-dark-border transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 px-8">
            {/* Mobile Menu Items */}
            <ul className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left py-4 px-4 rounded-xl text-lg font-semibold uppercase tracking-wider transition-all duration-300 group ${
                      activeSection === item.id
                        ? 'text-text-primary bg-primary/10 border border-primary/20'
                        : 'text-text-secondary hover:text-text-primary hover:bg-dark-border/50'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Language Switcher */}
            <div className="mt-8 pt-8 border-t border-dark-border">
              <LanguageSwitcher 
                isMobile={true} 
                onLanguageChange={() => setMobileMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;