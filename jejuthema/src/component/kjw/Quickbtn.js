import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import styleQuickbtn from "../../scss/kjw/Quick.module.scss";
import { Link } from "react-router-dom"

function Quickbtn({quickText}) {

    const [hoverText , setHoverText] = useState(false)

    return (
        <div className={styleQuickbtn.QWrap}>
            <div className={`${styleQuickbtn.Qtext} ${hoverText && styleQuickbtn.hoverOn}`}>{quickText.text}</div>
            <div 
                className={styleQuickbtn.Qbtn}
                onMouseEnter={() => setHoverText(true)}
                onMouseLeave={() => setHoverText(false)}
            >
                <a href={quickText.href} target={quickText.target}>
                    <i class={quickText.icons}></i>
                </a>             
            </div>
        </div>
    )
}

export default Quickbtn
