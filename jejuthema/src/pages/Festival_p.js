import Maintext from "../component/kjw/Maintext";
import Festival from "../component/kjw/Festival";
import {Div} from "../js/CommonUi"

function Festival_p(commonData){
    return(
        <Div>
            <Maintext
                title="진행중인 행사"
                subTitle="뭘 해야할지 모르겠다면 여기를 주목해주세요!"
            ></Maintext>
            <Festival
                commonData = {commonData.commonData}
            ></Festival>
        </Div>
    );
}

export default Festival_p;