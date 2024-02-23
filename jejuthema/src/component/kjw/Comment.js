import { useEffect, useState, useRef, useForm } from "react"
import CommitStyle from "../../scss/kjw/Comment.module.scss"
import CommentCon from "./CommentCon"
import { myApi } from "../../api/api"

function Comment() {

    const [nicknameValue, setNicknameValue] = useState("")
    const [commentConText, setcommentConText] = useState("")


    const [commentdata, setCommentdata] = useState(null); // 댓글등록시 글쓴이 데이터 array
    const [dataUp, setDataUp] = useState(false);


    const [formData, setFormData] = useState({
        name: "",
        content: "",
    });









    // const commentsApi = async () => {
    //     const myFormDataGet = await myApi("comments")
    //     // console.log("????", myFormDataGet)

    //     setCommentdata(myFormDataGet.data)
    // }


    // useEffect(() => {
    //     commentsApi()
    // }, [])




    const commentRegistration = async (e) => {
        e.preventDefault()

        if (nicknameValue == "" || commentConText == "") {

            if (nicknameValue == "" && commentConText == "") {
                alert("폼을 입력해주세요")
            } else {
                if (nicknameValue == "") {
                    alert("이름 또는 닉네임을 입력해주세요")
                }
                if (commentConText == "") {
                    alert("댓글내용을 입력해주세요")
                }
            }
        } else {
            if (window.confirm("댓글을 등록하시겠습니까?")) {

                setCommentdata({ nicknameValue, commentConText })
                setFormData({
                    name: nicknameValue,
                    content: commentConText,
                })

                // console.log("formData>>>>>", formData)

                const myFormDataPost = await myApi("comments", formData)
                setCommentdata(myFormDataPost)
                // console.log("댓글영역 들어가라>>>", myFormDataPost)

                // if (myFormDataPost.data.resultComment) {
                //     commentsApi();
                // }


                alert("댓글이 등록되었습니다")
                setNicknameValue("")
                setcommentConText("")
            };
        }

    }


    const nicknameChange = (event) => {
        setNicknameValue(event.target.value);
        formData.name = event.target.value;
    }

    const commentConTextChange = (event) => {
        setcommentConText(event.target.value);
        formData.content = event.target.value;
    }


    return (
        <>
            <div className={CommitStyle.Comment}>
                <form action="">
                    <div className={CommitStyle.CommentWrite1}>
                        <label for="name">이름/닉네임</label>
                        <input
                            type="text"
                            placeholder="이름 or 닉네임"
                            id="nickname"
                            name="name"
                            value={nicknameValue}
                            onChange={nicknameChange}
                        />
                    </div>
                    <div className={CommitStyle.CommentWrite2}>
                        <textarea
                            name="content"
                            id=""
                            value={commentConText}
                            cols="30" rows="10"
                            placeholder="내용을 적어주세요"
                            onChange={commentConTextChange}
                        ></textarea>
                        <button
                            onClick={(event) => {
                                commentRegistration(event);
                            }}
                        >등록</button>
                    </div>
                </form>

                <CommentCon
                    commentdata={commentdata && commentdata}
                ></CommentCon>


            </div>
        </>
    );
}

export default Comment