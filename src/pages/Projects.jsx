import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import TabNavigation from '../components/TabNavigation';
import ProjectCard from '../components/ProjectCard';


const Projects = () => {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: 'All',
      icon: (
        <img src="/icons/projects.svg" alt="Projects" className="w-full h-full" style={{ filter: "brightness(0) invert(1)" }} />

      )
    },
    {
      id: 1,
      label: 'Web',
      icon: (
        <img src="/icons/web.svg" alt="Web" className="w-full h-full" style={{ filter: "brightness(0) invert(1)" }} />

      )
    },
    {
      id: 2,
      label: 'Mobile',
      icon: (
        <img src="/icons/mobile.svg" alt="Mobile" className="w-full h-full" style={{ filter: "brightness(0) invert(1)" }} />

      )
    }
  ];

  const projectsData = [
    // {
    //   id: 1,
    //   title: 'Discord Clone',
    //   image: '/img/hollow-knight.png',
    //   description: 'A comprehensive real-time chat application featuring voice channels, text messaging, user management, and server organization. Built with modern web technologies for seamless communication.',
    //   tags: [
    //     { icon: '/icons/react.svg', label: 'React' },
    //     { icon: '/icons/nodejs.svg', label: 'Node.js' },
    //     { icon: '/icons/mongodb.svg', label: 'MongoDB' },
    //     { icon: '/icons/websocket.svg', label: 'WebSocket', className: 'invert' }
    //   ],
    //   category: 'web',
    //   gradientIndex: 0
    // },
    // {
    //   id: 2,
    //   title: 'Task Manager Pro',
    //   image: '/img/hollow-knight.png',
    //   description: 'A productivity mobile app for managing tasks and projects with intuitive drag-and-drop functionality, team collaboration features, and progress tracking.',
    //   tags: [
    //     { icon: '/icons/flutter.svg', label: 'Flutter' },
    //     { icon: '/icons/firebase.svg', label: 'Firebase' },
    //     { icon: '/icons/android.svg', label: 'Android' }
    //   ],
    //   category: 'mobile',
    //   gradientIndex: 1
    // },
    // {
    //   id: 3,
    //   title: 'E-Commerce Platform',
    //   image: '/img/hollow-knight.png',
    //   description: 'Full-featured online marketplace with secure payment integration, comprehensive inventory management, order tracking, and responsive design for all devices.',
    //   tags: [
    //     { icon: '/icons/js.svg', label: 'JavaScript' },
    //     { icon: '/icons/express.svg', label: 'Express.js', className: 'invert' },
    //     { icon: '/icons/mysql.svg', label: 'MySQL', className: 'invert' }
    //   ],
    //   category: 'web',
    //   gradientIndex: 2
    // },
    // {
    //   id: 4,
    //   title: 'Weather Forecast',
    //   image: '/img/hollow-knight.png',
    //   description: 'Beautiful weather application with precise location-based forecasts, interactive weather maps, and detailed meteorological data visualization.',
    //   tags: [
    //     { icon: '/icons/flutter.svg', label: 'Flutter' },
    //     { icon: '/icons/android.svg', label: 'Android' },
    //     { icon: '/icons/api.svg', label: 'Weather API', className: 'invert' }
    //   ],
    //   category: 'mobile',
    //   gradientIndex: 0
    // },
    // {
    //   id: 5,
    //   title: 'Portfolio Website',
    //   image: '/img/hollow-knight.png',
    //   description: 'Modern, responsive portfolio website showcasing projects and skills with smooth animations, dark mode support, and optimized performance.',
    //   tags: [
    //     { icon: '/icons/react.svg', label: 'React' },
    //     { icon: '/icons/css.svg', label: 'Tailwind CSS' },
    //     { icon: '/icons/js.svg', label: 'JavaScript' }
    //   ],
    //   category: 'web',
    //   gradientIndex: 1
    // },
    // {
    //   id: 6,
    //   title: 'Fitness Tracker',
    //   image: '/img/hollow-knight.png',
    //   description: 'Comprehensive fitness tracking mobile app with workout plans, progress monitoring, social features, and health data synchronization.',
    //   tags: [
    //     { icon: '/icons/flutter.svg', label: 'Flutter' },
    //     { icon: '/icons/firebase.svg', label: 'Firebase' },
    //     { icon: '/icons/android.svg', label: 'Android' }
    //   ],
    //   category: 'mobile',
    //   gradientIndex: 2
    // }
  ];

  const getFilteredProjects = () => {
    if (activeTab === 0) return projectsData; // All
    if (activeTab === 1) return projectsData.filter(project => project.category === 'web');
    if (activeTab === 2) return projectsData.filter(project => project.category === 'mobile');
    return projectsData;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="py-32 px-8 max-w-7xl mx-auto scroll-animate">
      <Section title={t('projects.title')} />

      <div className="max-w-6xl mx-auto mt-20">
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Projects Grid - Larger cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <img src="/icons/projects.svg" alt="Projects" className="w-20 h-20 text-text-muted" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">{t('projects.empty')}</h3>
            <p className="text-text-secondary">{t('projects.empty-category')}</p>
          </div>
        )}

        {/* Projects Count */}
        <div className="text-center mt-12">
          <p className="text-text-muted text-sm">
            {t('projects.showing', {
              count: filteredProjects.length,
              total: projectsData.length
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;