import './service.css'

const Services=props=>{
    const {serviceDetails}=props
    const {imageUrl,description}=serviceDetails

    return(
        <li className='service-container'>
            <img src={imageUrl}
                 alt='icons'
                 className='icon'/>
            <p className='description'>{description}</p>
        </li>
    )
}

export default Services