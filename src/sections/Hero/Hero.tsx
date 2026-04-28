import profile from "../../assets/images/profile.png";

function Hero() {
    return (
            <>
            <section className="intro-hero">
                <div className="w-full">
                    <h1 className="text-4xl md:text-4xl font-bold">Olá, eu sou Natália Peralta!</h1>
                    <p className="mt-4 text-lg text-slate-300">Desenvolvedora Front-End Junior formada em Ciência da Computação.</p>

                    <div className="mt-6 flex gap-4">
                        <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-500 transition">Ver Projetos</button>
                        <button className="border border-white px-6 py-2 rounded-lg hover:bg-slate-800 transition">Download CV</button>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center">
                    <img
                    src={profile}
                    alt="Foto de Natália"
                    className="w-64 h-64 object-cover"
                     />
                </div>
            </section>
        </>
    )
}

export default Hero