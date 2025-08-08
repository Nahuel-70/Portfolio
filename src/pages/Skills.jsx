import Section from '../components/Section';
import TabNavigation from '../components/TabNavigation';
import SkillCard from '../components/SkillCard';
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation();

  const skillsData = [
     {
      icon: '/icons/web.svg',
      title: t('skills.web.title'),
      description: t('skills.web.description'),
      tags: [
        { icon: '/icons/html.svg', label: t('skills.web.tags.html') },
        { icon: '/icons/css.svg', label: t('skills.web.tags.css') },
        { icon: '/icons/js.svg', label: t('skills.web.tags.js') },
        { icon: '/icons/nodejs.svg', label: t('skills.web.tags.node') },
        { icon: '/icons/express.svg', label: t('skills.web.tags.express'), className: 'invert' }
      ],
      gradientIndex: 0
    },
    {
      icon: '/icons/mobile.svg',
      title: t('skills.mobile.title'),
      description: t('skills.mobile.description'),
      tags: [
        { icon: '/icons/flutter.svg', label: t('skills.mobile.tags.flutter') },
        { icon: '/icons/firebase.svg', label: t('skills.mobile.tags.firebase') },
        { icon: '/icons/android.svg', label: t('skills.mobile.tags.android') }
      ],
      gradientIndex: 1
    },
    {
      icon: '/icons/database.svg',
      title: t('skills.database.title'),
      description: t('skills.database.description'),
      tags: [
        { icon: '/icons/mysql.svg', label: t('skills.database.tags.mysql'), className: 'invert' },
        { icon: '/icons/mongodb.svg', label: t('skills.database.tags.mongodb') }
      ],
      gradientIndex: 2
    },
    {
      icon: '/icons/tools.svg',
      title: t('skills.tools.title'),
      description: t('skills.tools.description'),
      tags: [
        { icon: '/icons/git.svg', label: t('skills.tools.tags.git') },
        { icon: '/icons/github.svg', label: t('skills.tools.tags.github'), className: 'invert' },
        { icon: '/icons/vscode.svg', label: t('skills.tools.tags.vscode') },
        { icon: '/icons/intellijidea.svg', label: t('skills.tools.tags.intellijidea') }
      ],
      gradientIndex: 0
    },
    {
      icon: '/icons/softskills.svg',
      title: t('skills.soft-skills.title'),
      description: t('skills.soft-skills.description'),
      tags: [
        { icon: '/icons/team.svg', label: t('skills.soft-skills.tags.teamwork'), className: 'invert' },
        { icon: '/icons/creativity.svg', label: t('skills.soft-skills.tags.creativity'), className: 'invert' },
        { icon: '/icons/selflearning.svg', label: t('skills.soft-skills.tags.self-learning'), className: 'invert' },
        // { icon: '/icons/problem.svg', label: t('skills.soft-skills.tags.problem-solving'), className: 'invert' }
        { icon: '/icons/language.svg', label: t('lang-es'), className: 'invert' },
        { icon: '/icons/language.svg', label: t('lang-en'), className: 'invert' },
      ],
      gradientIndex: 1
    },
    {
      icon: '/icons/learning.svg',
      title: t('skills.learning.title'),
      description: t('skills.learning.description'),
      tags: [
        { icon: '/icons/react.svg', label: t('skills.learning.tags.react') },
        { icon: '/icons/angular.svg', label: t('skills.learning.tags.angular') },
        { icon: '/icons/postgresql.svg', label: t('skills.learning.tags.postgresql') }
      ],
      gradientIndex: 2
    }
  ];

  const renderContent = () => {
    return (
      <div className="animate-slideIn">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              {...skill}
              index={index}
            />
          ))}
        </div>
      </div>
    )
  };

  return (
    <section id="skills" className="py-32 px-8 max-w-7xl mx-auto scroll-animate">
      <div className="max-w-6xl mx-auto">
        <Section title={t("skills.title")} />

        <div className="mt-8">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Skills;