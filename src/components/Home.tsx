import './Home.css'
import electronic from './Electronic.png'
import jewelry from './jewelry.jpg'
import men from './Men.jpg'
import women from './women.jpg'





export function Home(): JSX.Element{
    return  <div className="slider" style={{margin:"5% 0"}}>
    <div className="imagebox">
        <img src={electronic}/>
        <a ></a>
        <h3>Your Home smarter</h3>
    </div>
    <div className="imagebox">
        <img src={jewelry}></img>
        <h3>magical jewelry set</h3>

    </div>
    <div className="imagebox">
        <img src={men}/>
        <h3>Men's wear</h3>
    </div>
    <div className="imagebox">
        <img src={women}/>
        <h3>Women's clothing</h3>
    </div>
   
</div>

      
}
