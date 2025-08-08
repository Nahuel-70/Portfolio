import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t } = useTranslation();
    const [typingText, setTypingText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const texts = t('home.title-variants', { returnObjects: true });

    useEffect(() => {
        const currentText = texts[currentIndex];
        const speed = isDeleting ? 50 : 150;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (typingText.length < currentText.length) {
                    setTypingText(currentText.slice(0, typingText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (typingText.length > 0) {
                    setTypingText(currentText.slice(0, typingText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [typingText, currentIndex, isDeleting, texts]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center text-center relative overflow-hidden"
        >
            <div className="max-w-7xl px-8 z-10">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 uppercase tracking-widest opacity-0 animate-slideInUp">
                    {t('home.title')}{' '}
                    <span className="text-gradient-primary">
                        {typingText}
                    </span>
                    {!isDeleting && typingText && (
                        <span className="animate-blink inline-block relative -top-[0.05em] text-text-primary">|</span>
                    )}
                </h1>

                <p className="text-xl md:text-2xl text-text-secondary font-light mt-10 mb-12 opacity-0 animate-slideInUp [animation-delay:0.3s]">
                    {t('home.subtitle')}
                </p>


                <div className="flex gap-8 justify-center flex-wrap opacity-0 animate-slideInUp [animation-delay:0.6s]">
                    <Button
                        variant="primary"
                        onClick={() => scrollToSection('projects')}
                    >
                        {t('home.button-primary')}
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => scrollToSection('contact')}
                    >
                        {t('home.button-secondary')}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Home;