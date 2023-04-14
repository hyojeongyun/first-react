import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "윤효정",
        comment: "안녕하세요~"
    },
    {
        name: "윤효정",
        comment: "리액트 재밌다~~~~"
    }
];


function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                    return (
                        <Comment name={comment.name} comment={comment.comment} />
                    )
            })}
        </div>
    );
}

export default CommentList;