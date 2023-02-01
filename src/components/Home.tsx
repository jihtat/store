import './Home.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import {Navigation , EffectFade} from 'swiper'
import electronic from './Electronic.png'
import jewelry from './jewelry.jpg'
import men from './Men.jpg'
import women from './women.jpg'
import { styles } from 'dom7'


export function Home(): JSX.Element{
    return ( <div className="container">
        <Swiper
           modules={[Navigation , EffectFade]}
           navigation 
           effect
           speed={800}
           slidesPerview={1}
           loop 
           className="myswiper"
        >
            <SwiperSlide>
                <img  src={electronic}    alt=""  />
            </SwiperSlide>
            <SwiperSlide>
                <img  src={jewelry}    alt=""  />
            </SwiperSlide>
            <SwiperSlide>
                <img  src={men}    alt=""  />
            </SwiperSlide>
            <SwiperSlide>
                <img  src={women}    alt=""  />
            </SwiperSlide>



        </Swiper>

    </div>




    )

      
}
