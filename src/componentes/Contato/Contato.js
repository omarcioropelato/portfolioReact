import './Contato.css';
import Botao from '../Botao/Botao';

function Contato() {
    return (
        <div className='contato'>
            <h3 className='contato-texto'>Acesse Minhas Redes</h3>
            <div className='contato-links'>
                <Botao label='GitHub' link='https://github.com/omarcioropelato'/>
                <Botao label='Linkedin' link='https://br.linkedin.com/'/>
                <Botao label='Twitch' link='https://www.twitch.tv/'/>
            </div>
        </div>
    );
}

export default Contato;