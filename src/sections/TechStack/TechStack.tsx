function TechStack() {
    return (
        <>
        <section className="tech-stack">
            <h2 className="text-3xl md:text-4xl font-bold">Tecnologias que eu utilizo</h2>

            <div className="mt-10">
                <div>
                <div className="flex gap-4 justify-center">
                    <div className="w-96 flex border border-slate-600 rounded-lg">
                        <h3 className="px-4 py-2">Linguagens:</h3>
                        <p className="py-2">JavaScript (ES6+), TypeScript</p>
                    </div>

                    <div className="w-96 flex border border-slate-600 rounded-lg">
                        <h3 className="px-4 py-2">Frameworks/Libraries:</h3>
                        <p className="py-2">React.js</p>
                    </div>
                </div>

                <div className="flex gap-4 justify-center py-4">
                    <div className="w-96 flex border border-slate-600 rounded-lg">
                        <h3 className="px-4 py-2">Estilização:</h3>
                        <p className="py-2">Tailwind CSS, Styled Components</p>
                    </div>

                    <div className="w-96 flex border border-slate-600 rounded-lg text-left">
                        <h3 className="px-4 py-2">Ferramentas:</h3>
                        <p className="py-2">Git, Figma (UX Design), Integração com APIs</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default TechStack