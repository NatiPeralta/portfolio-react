import ProjectCard, { type ProjectCardProps } from "./ProjectCard";
import movies from "../../assets/images/movies.png";
import front from "../../assets/images/front.png";
import garol from "../../assets/images/garol.png";
import email from "../../assets/images/email.png";
import tributo from "../../assets/images/tributo.png";
import form from "../../assets/images/form.png";
import hdc from "../../assets/images/hdc.png";
import insta from "../../assets/images/insta.png";
import bookstore from "../../assets/images/bookstore.png";
import frete from "../../assets/images/frete.png";
import { useState } from "react";

function Project() {
    //Centralizando os dados dos projetos
    const projectsData: ProjectCardProps[] = [
        {
            img: movies,
            title: "React Movies",
            description: "Um site onde lista todos os filmes e é possível pesquisar, favoritar e desfavoritar o seu filme favorito!",
            linkGit: "https://github.com/NatiPeralta/react-movies",
            linkDemo: "https://react-movies-mpi4.vercel.app/",
        },
        {
            img: frete,
            title: "Simfrete",
            description: "Um site desenvolvido durante um desafio técnico para consulta de cidades cadastradas a partir de um CEP.",
            linkGit: "https://github.com/NatiPeralta/cep-range-finder",
            linkDemo: "https://cep-range-finder-pzj9cbcs3-natiperaltas-projects.vercel.app/",
        },
        {
            img: front,
            title: "Desenvolvimento Web",
            description: "Esse site foi desenvolvido para praticar os conceitos em HTML e CSS adquiridos nas aulas do curso Dev. Full Stack Jr da +praTi",
            linkGit: "https://github.com/NatiPeralta/front-end-exercicios-3",
            linkDemo: "https://natiperalta.github.io/front-end-exercicios-3/",
        },
        {
            img: email,
            title: "Rockin' Shop - Email Marketing",
            description: "Desenvolvimento de um e-mail marketing responsivo utilizando HTML e CSS, seguindo boas práticas de compatibilidade entre diferentes clientes de e-mail.",
            linkGit: "https://github.com/NatiPeralta/rockin-shop-email",
            linkDemo: "https://rockin-shop-email.vercel.app/",
        },
        {
            img: insta,
            title: "Clone da Home do Instagram",
            description: "Página clone da ´Home´ e do ´Esqueci minha senha´ do Instagram desenvolvido utilizando HTML e CSS durante o curso de Formação Front end na Udemy.",
            linkGit: "https://github.com/NatiPeralta/clone-home-instagram",
            linkDemo: "https://natiperalta.github.io/clone-home-instagram/",
        },
        {
            img: tributo,
            title: "Tributo The Offspring",
            description: "Projeto desenvolvido utilizando HTML e CSS durante o curso de Formação Front end na Udemy.",
            linkGit: "https://github.com/NatiPeralta/tributo-the-offspring",
            linkDemo: "https://natiperalta.github.io/tributo-the-offspring/",
        },
        {
            img: hdc,
            title: "hDC Host",
            description: "Plataforma de serviços desenvolvido durante o curso de Formação Front end na Udemy.",
            linkGit: "https://github.com/NatiPeralta/hdc-host-project",
            linkDemo: "https://natiperalta.github.io/hdc-host-project/",
        },
        {
            img: form,
            title: "Venda de Carros - Form",
            description: "Projeto desenvolvido com a tag form do HTML e estilizado com CSS durante o curso de Formação Front end na Udemy.",
            linkGit: "https://github.com/NatiPeralta/form-project",
            linkDemo: "https://natiperalta.github.io/form-project/",
        },
        {
            img: garol,
            title: "Chá de Casa Nova",
            description: "Convite digital para o chá de casa nova de amigos queridos. O design traz uma identidade visual personalizada para o casal. ",
            linkGit: "https://github.com/NatiPeralta/casa-nova",
            linkDemo: "https://natiperalta.github.io/casa-nova/",
        },
        {
            img: bookstore,
            title: "Bookstore",
            description: "Um site desenvolvido durante o curso da +praTi para aplicar a estilização em Tailwind. Aplicada ferramenta Dark/Light",
            linkGit: "https://github.com/NatiPeralta/bookstore",
            linkDemo: "https://bookstore-inky-seven.vercel.app/",
        },
    ];

    //Estado para controlar o índice do primeiro card visível
    const [currentIndex, setCurrentIndex] = useState(0);

    //Quantidade de cards visíveis por vez (pode ser adaptado para a tela inteira ou responsivo)
    const visibleCards = 1;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projectsData.length - visibleCards ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? projectsData.length - visibleCards : prevIndex - 1
        );
    };

    return (
        <>
        <section id="projects" className="relative w-full max-w-4xl mx-auto px-4 py-8 projects min-h-screen">
            <h2 className="text-3xl md:text-4xl font-bold text-center py-8">Projetos</h2>

            <div className="relative">

            <div className="overflow-hidden rounded-xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {projectsData.map((project, index) => (
                        <div key={index} className="w-full flex-shrink-0 px-2">
                            <ProjectCard
                                img={project.img}
                                title={project.title}
                                description={project.description}
                                linkGit={project.linkGit}
                                linkDemo={project.linkDemo}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Botões de Navegação */}
            <button onClick={prevSlide} className="absolute top-1/2 left-2 -translate-y-1/2 bg-slate-800/70 hover:bg-slate-800 text-white p-2 rounded-full md:-left-12 transition-all z-10" aria-label="Projeto anterior">

            ❮

            </button>

            <button onClick={nextSlide} className="absolute top-1/2 right-2 -translate-y-1/2 bg-slate-800/70 hover:bg-slate-800 text-white p-2 rounded-full md:-right-12 transition-all z-10" aria-label="Próximo projeto">

            ❯

            </button>
            </div>

            {/* Indicadores de bolinha (Dots) */}
            <div className="flex justify-center space-x-2 mt-6">
                {projectsData.map((_, index) => (
                    <button key={index} onClick={() => setCurrentIndex(index)} className={`h-2 w-2 rounded-full transition-all ${
                        currentIndex === index ? "bg-blue-600 w-4" : "bg-gray-400"
                    }`}
                    />
                ))}
            </div>
        </section>
        </>
    );
}

export default Project;