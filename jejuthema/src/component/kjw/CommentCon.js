import React, { useEffect, useState } from 'react'
import CommentConStyle from "../../scss/kjw/CommentCon.module.scss"
import { myApi } from "../../api/api"

function CommentCon({
    commentdata
}) {

    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month + '-' + day;

    const [commentdata2, setCommentdata2] = useState(null);

    const commentsApi = async () => {
        const myFormDataGet = await myApi("comments")
        setCommentdata2(myFormDataGet.data)
    }


    useEffect(() => {
        commentsApi()
    }, [commentdata])


    const commentDelet = async (clickId) => {
        if (window.confirm("댓글을 삭제하시겠습니까??")) {

            const commentD = await myApi(`comments/${clickId}/d`)

            if (commentD.data) {
                commentsApi()
                alert("댓글이 삭제되었습니다.")
            } else {
                alert("댓글 삭제에 실패했습니다.")
            }

        };
    }

    return (
        <>
            {
                commentdata2 && commentdata2.length > 0 ?
                    commentdata2.map((el, idx) => (
                        <div className={CommentConStyle.commentCon} key={el.id}>
                            <div>
                                <div className={CommentConStyle.commentinfo}>
                                    <section>
                                        <p className={CommentConStyle.userId}>{el.name}</p>
                                        <span className={CommentConStyle.commentDate}>{dateString}</span>
                                    </section>
                                    <span
                                        className={CommentConStyle.delBtn}
                                        onClick={(e) => {
                                            commentDelet(el.id)
                                        }}
                                    >삭제</span>
                                </div>
                                <div className={CommentConStyle.commentCons}>
                                    <p className="content">{el.content}</p>
                                </div>
                            </div>
                        </div>
                    )) :
                    <div className={"text-center"}>
                        <p style={{ lineHeight: "100px", marginBottom: "0px" }}>등록된 댓글이 없습니다.</p>
                    </div>
            }
        </>
    )
}

export default CommentCon
