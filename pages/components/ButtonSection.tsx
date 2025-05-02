function ButtonSection(props: any) {
  const { location, title } = props;
  return (
    <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
        <a href={location}>
        <button className="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                {title}
            </span>
        </button>
        </a>
    </div>
  )
}

export default ButtonSection