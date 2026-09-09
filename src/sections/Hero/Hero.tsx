import profile from "../../assets/images/profile.png";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import curriculo from "../../assets/documents/Natália Peralta — Currículo Front-end.pdf";
import { motion } from "framer-motion";

function Hero() {
    return (
            <>
            <motion.section className="intro-hero grid grid-cols-1 md:grid-cols-2" initial={{ opacity: 0, y:30 }} animate={{ opacity: 1, y:0 }} transition={{ duration: 0.8 }}>
                <div className="flex justify-center items-center">
                    <motion.img
                    src={profile}
                    alt="Foto de Natália"
                    className="w-64 h-64 object-cover rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                     />
                </div>
                <div className="w-full">
                    <h1 className="text-4xl md:text-4xl font-bold">Olá, eu sou Natália Peralta!</h1>
                    <p className="mt-4 text-lg text-slate-300">Desenvolvedora Front-End Junior formada em Ciência da Computação.</p>

                    <div className="mt-6 flex gap-4 justify-center md:justify-start text-2xl text-slate-400 hover:text-white transition">
                        <FaReact />
                        <FaJs />
                        <FaHtml5 />
                        <FaCss3Alt />
                    </div>

                    <motion.div className="mt-6 flex gap-4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                        <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-500 transition"><a href="#projects">Ver Projetos</a></button>
                        <button className="border border-white px-6 py-2 rounded-lg hover:bg-slate-800 transition"><a href={curriculo} download>Download CV</a></button>
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}

export default Hero