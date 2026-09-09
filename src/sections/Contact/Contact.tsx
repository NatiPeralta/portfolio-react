function Contact() {
    return (
        <>
        <section className="relative w-full max-w-4xl mx-auto px-4 py-8 projects min-h-screen">

        <div>

            <div className="py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center py-3">Quer conversar comigo? Vamos nos conectar!</h2>
                <p className="text-center">Você pode me enviar uma mensagem pelo LinkedIn ou visualizar meus repositórios no GitHub.</p>
            </div>

            <div className="text-center py-8 border border-slate-600 rounded-lg max-w-2xl mx-auto shadow-md rounded-lg">
                <h2 className="font-bold text-xl py-2">Minhas Redes</h2>
                <p className="text-lg">Email: nati.g.peralta@hotmail.com</p>
                    <div className="mt-6 flex gap-4 justify-center">
                        <button className="border border-white px-6 py-2 rounded-lg hover:bg-slate-800 transition"><a href="https://github.com/NatiPeralta" target="_blank" rel="noopener noreferrer">GitHub</a></button>
                        <button className="border border-white px-6 py-2 rounded-lg hover:bg-slate-800 transition"><a href="https://www.linkedin.com/in/natália-peralta" target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
                    </div>
            </div>
            
        </div>

        </section>
        </>
    )
}

export default Contact