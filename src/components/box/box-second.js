import './box-second.css'


const Boxsecond = ({title, content})=> {
    return(
        <div className='box-cnt'>
            <h2>{title}</h2>
            <p className='text-cnt'>{content}</p>
        </div>
    )
}

export default Boxsecond