function TechStack() {
    return (
        <>
        <section className="tech-stack px-4 max-w-5xl mx-auto py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Tecnologias que eu utilizo</h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                
                    <div className="flex border border-slate-600 rounded-lg text-left p-4 ">
                        <h3 className="font-semibold min-w-[100px]">Linguagens:</h3>
                        <p className="text-slate-300">JavaScript (ES6+), TypeScript</p>
                    </div>

                    <div className="flex border border-slate-600 rounded-lg text-left p-4 ">
                        <h3 className="font-semibold min-w-[100px]">Frameworks:</h3>
                        <p className="text-slate-300">React.js</p>
                    </div>

                    <div className="flex border border-slate-600 rounded-lg text-left p-4 ">
                        <h3 className="font-semibold min-w-[100px]">Estilização:</h3>
                        <p className="text-slate-300">Tailwind CSS, Styled Components</p>
                    </div>

                    <div className="flex border border-slate-600 rounded-lg text-left p-4 ">
                        <h3 className="font-semibold min-w-[100px]">Ferramentas:</h3>
                        <p className="text-slate-300">Git, Figma (UX Design), Integração com APIs</p>
                    </div>
            </div>
        </section>
        </>
    )
}

export default TechStack