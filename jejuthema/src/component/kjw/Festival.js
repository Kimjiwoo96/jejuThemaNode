// import "../../scss/kjw/Festival.module.scss"
import FestivalStyles from "../../scss/kjw/Festival.module.scss";


function Festival(commonData){


    return(
        <>
        
            <div className={`${FestivalStyles.festivalWrap} row mx-0`}>
                {
                    commonData.commonData.map((el, idx) => {
                        return(
                            <div key={`festival${idx}`} className="col-md-4 mb-4 mb-md-0">
                                <div className="border p-0">
                                    <img src={el.img} alt={`Festival ${idx}`} className="w-100"/>
                                    <div className="d-flex flex-column justify-content-between py-4 px-4 " style={{
                                        height: "12rem"
                                    }}>
                                        <h4 className="mb-0" style={{minHeight : "2.5em", wordBreak : "keep-all"}}>{el.festivalNm}</h4>
                                        <p className="mb-auto">{el.festivalCon}</p>              
                                        <p className="mb-2"><span>{el.festivalDate}</span> ~ <span>{el.festivalTo}</span></p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                } 
            </div>
      
           
        </>
    );







}

export default Festival;