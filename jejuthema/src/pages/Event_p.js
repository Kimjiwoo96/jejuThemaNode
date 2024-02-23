// module

// import 파일
import Maintext from "../component/kjw/Maintext"
import MEvent from "../component/kjw/Event"
import {Div} from "../js/CommonUi"


function Event_p({

}){
    return(
        <Div>
            <Maintext
                title="이벤트"
                subTitle="진행중인 이벤트를 확인하고 무료체험 기회를 얻으세요!"
            ></Maintext>
            <MEvent></MEvent>
        </Div>
    );
}

export default Event_p;