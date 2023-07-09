import './TextoDestaque.css'

function TextoDestaque() {
    return (
        <>
            <div className='container'>
                <div className='container-textos'>
                    <p className='textoDestaque'>Eleve seu negócio digital a outro nível com um <strong>Front-end de qualidade!</strong></p>
                    <p className='textoPrincipal'>Olá! Sou Márcio Ropelato, desenvolvedor Front-end com especialidade em React, HTML e CSS. Estou estudando na Alura e criando projetos para colocar em prática várias boas ideias.</p>
                </div>

                <div className='container-imagem'>
                    <img className='imagem-portfolio' src={process.env.PUBLIC_URL + '/imagens/codigoFonte.jpg'} alt='Foto de Márcio Ropelato' />
                </div>
            </div>

        </>
    )
}

export default TextoDestaque;