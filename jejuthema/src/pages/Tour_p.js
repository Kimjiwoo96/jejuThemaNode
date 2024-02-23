import React from 'react'
import { useEffect, useState, useRef } from "react"
import Maintext from "../component/kjw/Maintext"
import { tour } from "../js/commonData"
import "../scss/kjw/Tour.scss"


function Tour_p() {

    const cosKeyNm = Object.keys(tour)
    const [cosnm, setCosnm] = useState(cosKeyNm[0])
    const toggleStatus = useRef(false)
    const [cosbg, setCosbg] = useState(0)

    useEffect(() => {

        document.querySelector(".tourSelect > h2").addEventListener("click", () => {
            toggleStatus.current = !toggleStatus.current
            document.querySelector(".tourSelect").classList = toggleStatus.current ? "tourSelect border position-relative px-3 on" : "tourSelect border position-relative px-3"
        })

        return () => {
            document.querySelector(".tourSelect > h2").removeEventListener("click", () => {
                document.querySelector(".tourSelect").classList = "tourSelect border position-relative px-3 on"
            })
        }
    }, [])

    const selectTap = () => {
        const tourSelectUL = document.querySelector(".tourSelect > ul")

        if (!tourSelectUL.classList.contains('selectTapClick')) {
            tourSelectUL.classList = "position-absolute w-100 start-0 right-0 p-0 border selectTapClick"
        } else {
            tourSelectUL.classList = "position-absolute w-100 start-0 right-0 p-0 border"
        }
    }
    return (
        <>
            <Maintext
                title="투어경로 추천"
                subTitle="색다른 여행을 계획하세요."
            ></Maintext>
            <div className={`tourWrap position-relative`}>
                <div className='tourSelectWrap d-flex justify-content-end'>
                    <div className='tourSelect position-relative px-3'>
                        <h2
                            onClick={() => {
                                selectTap()
                            }}
                        >{cosnm}<i class="bi bi-caret-down"></i></h2>
                        <ul className='position-absolute w-100 start-0 right-0 p-0 border'>
                            {
                                cosKeyNm.map((el, idx) => {
                                    return (
                                        <>
                                            <li
                                                onClick={() => {
                                                    setCosnm(el)
                                                    console.log(cosnm)
                                                }}
                                            >{el}</li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <Maintext className="maintitle"
                        title={tour[cosnm][cosbg].title}
                        subTitle={tour[cosnm][cosbg].subTitle}
                    ></Maintext>
                    <div className='con'>
                        <div className='line'></div>
                        <div className='d-flex justify-content-around'>
                            {
                                tour[cosnm].map((el, idx) => {
                                    return (
                                        <React.Fragment key={idx}>

                                            <div
                                                style={{ cursor: "pointer" }}
                                                className={`tourList ${cosbg === idx ? "active" : ""} position-relative`}
                                                onClick={() => {
                                                    setCosbg(idx)
                                                }}
                                            >
                                                <div className={`location ${cosbg === idx ? "active" : ""}`} style={{ cursor: "pointer" }}><i class="bi bi-geo-alt-fill"></i></div>
                                                {el.title}
                                            </div>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <img
                        src={tour[cosnm][cosbg].img}
                        alt="정체가뭐야?"
                        className='position-absolute'
                    />
                    <div className='graybg'></div>
                </div>
            </div>
        </>
    )
}

export default Tour_p
