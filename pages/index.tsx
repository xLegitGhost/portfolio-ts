'use client'
import Hero from './components/Hero';
import ProyectCard from './components/ProyectCard';
import projects from './data/Projects';
import ButtonSection from './components/ButtonSection';
import Skills from './components/Skills';
import Contact from './components/Contact';
export default function Home() {
  return (
    <div className='bg-gradient-to-t from-slate-800 to-blue-950 p-8'>
      <section id='hero'>
        <Hero />
        <div className='flex flex-row justify-center mt-5'>
          <ButtonSection title='About Me' location='#hero'/>
          <ButtonSection title='Projects' location='#projects'/>
          <ButtonSection title='Skills' location='#skills'/>
          <ButtonSection title='Contact' location='#contact'/>
        </div>
      </section>
      <main>
        <section id='projects'>
          <span className='flex flex-col text-center text-white text-2xl font-bold mt-4'>My projects</span>
          <div className="flex flex-row justify-center my-8">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <div key={index} className="flex justify-center">
                    <ProyectCard
                      title={project.title}
                      description={project.description}
                      badge={project.badge}
                      image={project.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Skills/>
        <Contact/>
      </main>
    </div>
  );
}