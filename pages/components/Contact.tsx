function Contact() {
  return (
    <section id="contact" className="mt-10">
        <footer className="">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="https://github.com/xLegitGhost" className="flex items-center">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                    </svg>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ml-5">Uriel Ramírez</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Contact</h2>
                        <ul className="text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://api.whatsapp.com/send?phone=5214428640810&text=Hola!" target="_blank" className="hover:underline">WhatsApp</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/uriel-ram%C3%ADrez-467a6b278/" className="hover:underline">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm sm:text-center text-gray-400">© 2025 <a href="https://github.com/xLegitGhost" className="hover:underline">Uriel Ramírez </a>. All Rights Reserved.
                </span>
            </div>
            </div>
        </footer>
    </section>
  )
}

export default Contact