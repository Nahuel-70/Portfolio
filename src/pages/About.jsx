import ProfileImage from '../components/ProfileImage';
import Tag from '../components/Tag';
import { useTranslation, Trans } from 'react-i18next'

const About = () => {
  const { _t } = useTranslation();

  return (
    <section id="about" className="py-32 px-8 max-w-7xl mx-auto scroll-animate">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-16">
        {/* Profile Image */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
            <ProfileImage
              src="/img/profile.png"
              alt="Profile"
              size="large"
              className="relative z-10"
            />
          </div>
        </div>

        {/* Vertical Line */}
        <div className="lg:col-span-1 hidden lg:flex justify-center">
          <div className="w-1 h-[500px] bg-gradient-to-b from-transparent via-primary/50 to-transparent rounded-full shadow-glow"></div>
        </div>

        {/* About Content */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            {/* <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nahuel Gonzalez
            </h2> */}

            <div className="space-y-6">
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
                <Trans i18nKey="about.paragraph1">
                  I'm a <span className="text-primary font-semibold">junior developer</span> from Argentina, passionate about combining technology and creativity to build innovative solutions.
                  I love turning ideas into functional software while constantly learning and experimenting.
                </Trans>
              </p>

              <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
                <Trans i18nKey="about.paragraph2">
                  I've been exploring how to build <span className="text-secondary font-semibold">web apps</span>, design <span className="text-accent font-semibold">databases</span>, and develop <span className="text-tertiary font-semibold">mobile apps</span>, always focusing on clean code and user experience.
                </Trans>
              </p>

              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                <Trans i18nKey="about.paragraph3">
                  Currently diving into modern frameworks and technologies like Flutter and React, building real-world projects that challenge and grow my skills.
                </Trans>
              </p>
            </div>


          </div>

          {/* <div className="pt-4">
            <div className="flex flex-wrap gap-3">
              <Tag
                icon="/icons/locate.svg"
                label="Argentina"
                className='invert'
              />
              <Tag
                icon="/icons/language.svg"
                label={t('lang-es')}
                className='invert'
              />
              <Tag
                icon="/icons/language.svg"
                label={t('lang-en')}
                className='invert'
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;