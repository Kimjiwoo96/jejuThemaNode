import React from 'react'

import Comment from '../component/kjw/Comment';
import {Div} from "../js/CommonUi"

function Comment_P() {

    const marginBottom = {marginBottom:"100px",textAlign:"center"}
    return (
        <Div>
            <h4 style={marginBottom}>제주도 최고의 여행지를 이웃과 함께 공유해보세요!</h4>
            <Comment></Comment>
        </Div>
    )
}

export default Comment_P;
