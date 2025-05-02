import ProyectCardProps from "../data/Projects";

interface ProyectCardProps {
    title: string;
    description: string;
    badge: string;
    image: string;
}


function ProyectCard(props: ProyectCardProps) {
    const { title, description, badge, image } = props;
  return (
    
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-300 ease-in-out">
            <a href="#">
                <img className="rounded-t-lg" src={image} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                {badge && <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{badge}</span>}
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            </div>
        </div>
  )
}

export default ProyectCard