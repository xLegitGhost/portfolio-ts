import SocialButton from './SocialButton'

function Hero() {
  return (
    <div>
        <header className="flex flex-col items-center justify-center">
            <span className="text-white text-4xl font-bold text-center">
                Uriel Ramírez
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 my-3">Front End Developer</span>
            <div className='flex flex-row justify-center'>
            <SocialButton/>
            </div>
            <span className="text-white text-md text-center mt-2">I am a <strong>Front End Developer & Software Engineer Student</strong> with a passion for creating beautiful and functional web applications.
                <br />
                I have experience in <strong>React, Next.js, TypeScript and Tailwind CSS 🚀</strong>
            </span>
            
        </header>
        <div className="flex flex-row">

        </div>
    </div>
  )
}

export default Hero