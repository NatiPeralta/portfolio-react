import { motion } from "framer-motion";

export interface ProjectCardProps {
    img: string;
    title: string;
    description: string;
    linkGit: string;
    linkDemo: string;
}

const ProjectCard = ({ img, title, description, linkDemo, linkGit }: ProjectCardProps) => {
    return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.2 }}>
        <div className=" mx-auto border border-slate-700 rounded-[10px] shadow-md p-5 max-w-[500px] flex flex-col items-center justify-center transition-all duration-300 ">
                <div>
                    <img className="w-80 h-40 object-cover rounded-lg" src={img} alt="Imagem do Projeto Web da Natália" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                    {title}
                </h3>

                <p className="mt-4  text-center">
                    {description}
                </p>

            <div className="mt-6 flex gap-4">

                <a href={linkDemo} target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-6 py-2 rounded-lg">Visualizar</a>

                <a href={linkGit} target="_blank" rel="noopener noreferrer" className="border border-white px-6 py-2 rounded-lg hover:bg-slate-800 transition">GitHub</a>

            </div>
        </div>        
    </motion.div>
    )
}

export default ProjectCard