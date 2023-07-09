import './Link.css';

function Link(props){
    return (
        <a className='link' href={props.link}>{props.label}</a>
    );
}

export default Link;