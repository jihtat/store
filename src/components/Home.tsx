import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation } from 'swiper'

import electronic from './Electronic.png'
import jewelry from './jewelry.jpg'
import men from './Men.jpg'
import women from './women.jpg'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import './Home.css'


export function Home(): JSX.Element {
    const images = [electronic, jewelry, men, women]
    return (
        <Swiper
            modules={[Navigation]}
            navigation={true}
            speed={800}
            slidesPerView={1}
            loop
            style={{ height: "150px" }}
        >
            {images.map((image) => <SwiperSlide key={image}>
                <img src={image} alt="" height="100%" width="100%" style={{ objectFit: "contain", }} />
            </SwiperSlide>)}
        </Swiper>
    )
}
