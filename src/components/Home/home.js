import Form from "../FormContainer/form";
import Header from "../Header/header";
import './home.css'
import {RiStethoscopeFill} from 'react-icons/ri'
import {FaHospitalAlt,FaMedkit} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GiMedicinePills} from 'react-icons/gi'
import {FiInstagram,FiTwitter} from 'react-icons/fi'
import {AiFillFacebook} from 'react-icons/ai'

//import Services from "../ServiceList/service"






const Home=()=>{
  
     return(
      <div>
          <Header />
          <div className="app-container">
               <div className="head-container">
                  <h1 className="homoeopathy">About Homoeopathy</h1>
                  <div className="description-container">
                  <img src="https://i.postimg.cc/Qt8G253F/homeopathic-medicine.jpg" 
                        alt ='medicine'
                        className="medicine"/>
                  <p className="description">
                  Homeopathy (or homoeopathy) is a 200-year-old form of alternative medicine 
                  that claims to stimulate a healing response and strengthen the body’s ability 
                  to heal itself. Those who practice it claim that it is a holistic system of 
                  medicine based on the theory of treating ‘like with like’. It claims to stimulate 
                  the body’s own healing response to disease, using specially prepared, highly diluted 
                  preparations.</p>
                  
                  </div>
               </div>
               <div className="image-container">
                  <img src="https://i.postimg.cc/JnWZjbWL/Samuel-Hahnemann.png"
                       alt ='doc'
                       className="father"/>
                  <p className="quote">
                     'The highest ideal of cure is the speedy, gentle
                     and enduring restoration if health by the most trustworthy and least harmful way.'
                  </p>
               </div>
               <div className="icons">
                  <h1 className="why-us">Why us?</h1>
                  <ul className="list">
                     <li className="list-card">
                        <RiStethoscopeFill className="icon"/>
                        <p className="icon-descripiton">2+ Years of Experience</p>
                     </li>
                     <li className="list-card2">
                        <FaHospitalAlt size='50px' />
                        <p className="icon-descripiton">Easy to Locate</p>
                     </li>
                        <li className="list-card">
                        <FaMedkit size='45px' className="icon"/>
                        <p className="icon-descripiton">Free Medical consultation</p>
                     </li>
                     <li className="list-card">
                        <BsFillTelephoneFill className="icon"/>
                        <p className="icon-descripiton">Avaliability</p>
                     </li>
                     <li className="list-card">
                        <GiMedicinePills className="icon"/>
                        <p className="icon-descripiton">Effective Medicine</p>
                     </li>
                  </ul>
               </div>
               <Form />
               <div className="services-container">
                  <div className="bottom-container">
                     <p className="specialites">Treatment for</p>
                     <ul className="a">
                        <li className="rogam">Cod</li>
                        <li className="rogam">MenopausalDisorders</li>
                        <li className="rogam">Thyroid</li>
                        <li className="rogam">Male infertility</li>
                        <li className="rogam">Low Sperm Count</li>
                        <li className="rogam">Erectile Dysfunction</li>
                        <li className="rogam">Tonsilitis</li>
                     </ul>
                  </div>
                  <div className="social-container">
                     <li className="media-container">
                        <FiInstagram className="media-icon"/>
                        <p className="media">Instagram</p>
                     </li>
                     <li className="media-container">
                        <FiTwitter className="media-icon"/>
                        <p className="media">Twitter</p>
                     </li>
                     <li className="media-container">
                       <AiFillFacebook size='18px' className="media-icon"/>
                        <p className="media">Facebook</p>
                     </li>
                  </div>
               </div>
          </div>
       </div>
        )
     }
     

export default Home