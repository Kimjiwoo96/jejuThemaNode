import React from 'react'
import {attraction} from "../js/commonData";
import Maintext from "../component/kjw/Maintext"
import AttractionStyle from "../scss/kjw/Attraction.module.scss"
import { Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import { useEffect, useState , useRef } from "react"
import 'swiper/css';
import {Div} from "../js/CommonUi"



function Attraction_p() { 

    

    return (
        
     <Div>
        <Maintext
            title="이런 명소 어떠세요?"
            subTitle=""
        ></Maintext>
        
        <div className={`${AttractionStyle.attractionDiv} my-5` }>
        <Swiper
            modules={[Autoplay]}
            autoplay={{ 
                delay: 3000,
                disableOnInteraction : false
            }}
            // centeredSlides={true}
            spaceBetween={30}
            slidesPerView={'auto'}
            // breakpoints={breakpoints}
            loop = {true}
        >
        {
            attraction.map((el,idx) => {
             
                return(
                    <SwiperSlide key={idx} className={`w-auto ${ AttractionStyle.swiperSlide }`}>
                        <div className={AttractionStyle.attractionWrap}> 
                            <div className={AttractionStyle.con}>
                                <div
                                    
                                >
                                    <section  style={{
                                        backgroundImage:`url(${el.img})`,
                                        backgroundRepeat:"none",
                                        backgroundSize:"cover",
                                        height: "390px"
                                    }}>
                                        <h2>{el.title}</h2>
                                        <p>{el.txt}</p>
                                        <span>{el.Location}</span>
                                   

                                        
                                    </section>
                                    <ul
                                            className={`${AttractionStyle.hash} 
                                            d-flex flex-wrap justify-content-center
                                            text-dark mt-2 mx-0 p-0
                                            `}
                                        >
                                            <li>{el.hashTag[0]}</li>
                                            <li>{el.hashTag[1]}</li>
                                            <li>{el.hashTag[2]}</li>
                                    </ul>
                                    
                                </div>
                                
                            </div>
                        </div>  
                    </SwiperSlide>     
                )
            })
        }
        </Swiper>
        </div>
        
     </Div>
    )
}

export default Attraction_p