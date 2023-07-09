import Link from '../Link/Link';
import './Cabecalho.css'

function Cabecalho() {
    return (
        <div className='cabecalho'>
            <Link label = 'Home' link='http://localhost:3000/'/>
            <Link label = 'Sobre mim' link='http://localhost:3000/' />
        </div>
    )
}

export default Cabecalho;