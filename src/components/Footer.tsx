import './style.css'
import logo from './pic.png';
import { FaInstagram ,FaFacebook, FaArrowRight, FaRegEnvelope} from "react-icons/fa";

export function Footer(): JSX.Element{
    return  <footer>
    <div className="row">
      <div className="col">
        <img src={logo} alt="logo" width="70px" height="70px"/>
      </div>
      <div className="col">
        <h3>Adresse<div className="underline"><span></span></div>
        </h3>
        <p>Tunisia</p>
        <p>Kébili-Douz</p>
        <p className="email-id">bawone2410@ezgiant.com</p>
      </div>
      <div className="col">
        <h3>Links <div className="underline"><span></span></div>
        </h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="" >Privacy Policy</a></li>
        </ul>
      </div>
      <div className="col">
        <h3>Newsletter <div className="underline"><span></span></div>
        </h3>
        <form> <FaRegEnvelope className="far"/>
          <input type="text" placeholder="Enter your email address" required />
          <button type="submit"><FaArrowRight className="fas" /></button>
        </form>
        <div >
            <a  href="">< FaInstagram className="faicon"/></a>
            <a  href=""><FaFacebook className="faicon"/></a>
        </div>
      </div>
    </div>
    <hr/>
    <p className="copyright">© 2023, Dress To Impress</p>
  </footer>


}
