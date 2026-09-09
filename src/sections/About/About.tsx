function About() {
    return(
        <>
            <section className="relative w-full max-w-4xl mx-auto px-4 py-8 projects min-h-screen">
            <h2 className="text-3xl md:text-4xl font-bold text-center py-8">Sobre mim</h2>

            <div>
                <h3 className="text-2xl font-bold py-5">Quem sou eu</h3>
                <p>Sou desenvolvedora Front-End em formação, graduada em Ciência da Computação, com experiência profissional em suporte e atendimento a usuários. Atualmente estou focada no desenvolvimento de interfaces modernas utilizando React, TypeScript e Tailwind CSS, buscando criar aplicações responsivas, acessíveis e com boa experiência de usuário.</p>
            </div>

            <div>
                <h3 className="text-2xl font-bold py-5">Minha trajetória</h3>

                <div className="space-y-4">
                    <div>
                    <p>Bacharelado em Ciência da Computação - FADERGS (2019 - 2024)</p>
                    <p>Curso Dev Jr. - +praTi (2025)</p>
                    <p>Curso Formação Front-end - HTML, CSS, JavaScript, Reacts e +. - Hora de Codar - Udemy (2026)</p>
                    </div>

                    <div>
                    <p className="font-bold">Estágio no Tribunal de Justiça (2020 - 2021)</p>
                    <p>Instalação de softwares, configuração de impressoras e manutenção de computadores.</p>
                    </div>

                    <div>
                    <p className="font-bold">Estágio no Ministério Público (2021 - 2023)</p>
                    <p>Atendimento a usuários, suporte técnico e utilização do GLPI.</p>
                    </div>

                    <div>
                    <p className="font-bold">Assistente de E-commerce Pleno - Nativa Gems (2023 - 2026)</p>
                    <p>Apoio em melhorias de layout e experiência do usuário, atualização e otimização de produtos em plataformas digitais</p>
                    </div>

                    <div>
                    <p className="font-bold">Desenvolvimento Front End (Atual)</p>
                    <p>Projetos utilizando React, TypeScript, JavaScript, HTML, CSS e Tailwind.</p>
                    </div>
                
                    <div>
                    <p className="font-bold">Atualmente estudando:</p>
                    <ul className="list-disc pl-6">
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>Acessibilidade Web</li>
                        <li>Boas práticas de UI/UX</li>
                    </ul>
                    </div>
                </div>
            </div>

            </section>
        </>
    )
}

export default About