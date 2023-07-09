import './Botao.css'

function Botao(props){
    return (
        <>
        <a className='botao' href={props.link}>{props.label}</a>
        </>
    )
}

export default Botao;