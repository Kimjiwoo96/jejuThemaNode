import React from 'react'
import styleFooter from '../scss/kjw/Footer.module.scss'

function Footer() {
    return (
        <div className={`${styleFooter.fWrap} d-lg-flex text-center text-lg-start justify-content-lg-between py-5 `}>
            <div className={styleFooter.con1}>
                <div><img src="/img/footerLogo.png" alt="제주테마여행 로고" /></div>

                <div>
                    <p className={styleFooter.fOnly}>Copyright 2019 제주특별자치도. All rights reserved</p>
                    <p className='d-none d-lg-block'>(63122) 제주특별자치도 제주시 문연로 6(연동) 대표전화:064-120 야간.공휴일 당직실 전환</p>
                    <p className='d-none d-lg-block'>6, Munyeon-ro, Jeju-si, Jeju-do, 63122, Republic of Korea Tel. 82-64-120</p>
                </div>
            </div>






            <div className={styleFooter.con2}>
                <ul className={`${styleFooter.icons} d-flex justify-content-lg-end justify-content-center`}>
                    <li><a href="https://www.facebook.com/happyjejudo" target='_blank'><i class="bi bi-facebook"></i></a></li>
                    <li><a href="https://www.youtube.com/user/happyjejudo/video" target='_blank'><i class="bi bi-youtube"></i></a></li>
                    <li><a href="https://www.instagram.com/special_jejudo/" target='_blank'><i class="bi bi-instagram"></i></a></li>
                    <li><a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fhappyjejudo" target='_blank'><i class="bi bi-twitter"></i></a></li>
                </ul>

                <ul className={`${styleFooter.list} d-lg-flex justify-content-end d-none`}>
                    <li>회사소개 |</li>
                    <li>이용안내 |</li>
                    <li>개인정보처리방침 |</li>
                    <li>이용약관 |</li>
                    <li>고객센터</li>
                </ul>
            </div>





        </div>
    )
}

export default Footer
