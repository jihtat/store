import photo from '../company.jpg'
import '../pages.css'



export function About () {
    return (<div className="about-page">
        <img src={photo}  alt=""/>
        <h3 className="text">About Us</h3>
        <p className="text">Tap To Shop presents itself as a reference point for fashion that targets an increasingly demanding public, 
            and in just 2 years, had consolidated its brand image in 100 shops. Today, after 18 years,
             the chain has more than 1000 stores in over 70 markets, 
             with sales that represent 9% of the total revenue for the whole group.
              Tap To Shop has a sales area of more than 455,000 square meters. 
            The company's business encompasses the design, manufacture, distribution and sale of fashion in the stores.</p>
   </div>)
}