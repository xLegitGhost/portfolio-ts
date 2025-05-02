const progamingLanguages = [
    {
        title: 'JavaScript/TypeScript',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
    },
    {
        title: 'React',
        description: 'A JavaScript library for building user interfaces.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'
    },
    {
        title: 'Next.js',
        description: 'A React framework that enables functionality such as server-side rendering and generating static websites.',
        image: 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png'
    },
    {
        title: 'Tailwind CSS',
        description: 'A utility-first CSS framework for creating custom designs without having to leave your HTML.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s'
    }
]

const languageSkills = [
    {
        title: 'Spanish',
        description: 'Native language.',
    },
    {
        title: 'English',
        description: 'Intermediate level.',
    }
]

const softSkills = [
    {
        title: 'Teamwork',
        description: 'I have the ability to work effectively and collaboratively with others.',
    },
    {
        title: 'Problem Solving',
        description: 'I have the ability to find solutions to difficult or complex issues.',
    },
    {
        title: 'Adaptability',
        description: 'I have the ability to adjust to new conditions and environments.',
        image: '/adaptability.png'
    },
    {
        title: 'Communication',
        description: 'I have the ability to convey information effectively and efficiently to my team and clients.',
        image: '/communication.png'
    }
]

function Skills() {
  return (
    <section id="skills" className="flex flex-col justify-center items-center mt-8">
      <span className="text-white text-2xl font-bold">Skills</span>
        <div className="flex flex-row justify-center my-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {progamingLanguages.map((skill, index) => (
                <div key={index} className="flex justify-center">
                <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img src={skill.image} alt={skill.title} className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-center">{skill.title}</h3>
                </div>
                </div>
            ))}
            </div>
        </div>
        <span className="text-white text-2xl font-bold">Language Skills</span>
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row">
            {languageSkills.map((skill, index) => (
                <div key={index} className="flex justify-center mx-5">
                <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm hover:scale-105 transition-transform duration-300 ease-in-out">
                    <h3 className="text-lg font-semibold text-center">{skill.title}</h3>
                    <p className="text-gray-600 text-center">{skill.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        <span className="text-white text-2xl font-bold">Soft Skills</span>
        <div className="flex flex-row justify-center my-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
                <div key={index} className="flex justify-center">
                <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm hover:scale-105 transition-transform duration-300 ease-in-out">
                <span className="flex w-2.5 h-2.5 me-3 bg-blue-600 rounded-full"></span>
                    <h3 className="text-lg font-semibold text-center">{skill.title}</h3>
                    <p className="text-gray-600 text-center">{skill.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>

    </section>
  )
}

export default Skills

