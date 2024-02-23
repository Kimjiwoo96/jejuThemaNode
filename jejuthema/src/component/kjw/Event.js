// module 
import { useState } from "react";
// 파일 import
import eventStyles from "../../scss/kjw/Event.module.scss";
import {eventObj} from "../../js/commonData";



function Event({}){

    const [isHovering, setIsHovering] = useState(0);


    return(
        <>
        <div className={`${eventStyles.eventWrap} row mx-0`}>
             {
                eventObj.map((el,idx) => {
                    return(
                    <div 
                    className={`${eventStyles.innerDiv} col-lg-3 col-sm-6`}
                    key={`event ${idx}`}
                    onMouseOver={() => setIsHovering(idx+1)}
                    onMouseOut={() => setIsHovering(0)}
                    >

                      <div className={`border d-flex align-items-center flex-lg-column pb-lg-4 hoverStyle${idx+1}`}
                        style={{minHeight : "300px",padding:"10px",boxSizing:"border-box"}}
                      >
                        <div className={`${eventStyles.eventdiv} col`}>
                                <p><span>item0{idx + 1}</span></p>
                                <h5>{el.subTitle}</h5>
                                <h3>{el.mainTitle}</h3>
                            </div>
                            <img src={el.href} alt={idx}
                                className="col-4"
                            />
                        </div>
                    </div>
                    )
                })
            }       
        </div>
           
        </>
    );
}

export default Event;















