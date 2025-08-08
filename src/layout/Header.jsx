import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
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
        className="text-lg flex items-center gap-2 hover:scale-110 transition-transform"
      >
        {getCurrentFlag()}
        <span className="text-sm uppercase">{i18n.language}</span>
      </button>

      {open && (
        <ul className="absolute right-0 mt-2 bg-dark-bg border border-dark-border rounded shadow-lg w-40 text-sm">
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

const Header = () => {
  const { t } = useTranslation();
  const [activeSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: sectionId === 'about' ? 'center' : 'start'
      });
    }
  };

  return (
    <header
      id="header"
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-dark-border transition-all duration-300"
    >
      <nav className="py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            NAHUEL
          </button>

          <ul className="flex gap-10">
            {[
              { id: 'about', label: t('header.about') },
              { id: 'skills', label: t('header.skills') },
              { id: 'projects', label: t('header.projects') },
              { id: 'contact', label: t('header.contact') },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-semibold uppercase tracking-wider transition-all duration-300 group ${activeSection === item.id
                    ? 'text-text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                    : 'text-text-secondary hover:text-text-primary hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]'
                    }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-accent rounded transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </button>
              </li>
            ))}
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;