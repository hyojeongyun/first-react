import React from "react";
import Comment from "./Comment";

const comments = [
    {
        key: "comment1",
        name: "윤효정",
        comment: "안녕하세요~"
    },
    {
        key: "comment2",
        name: "윤효정2",
        comment: "리액트 재밌다~~~~"
    }
];


function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                    return (
                        <Comment key={comment.key} name={comment.name} comment={comment.comment} />
                    )
            })}
        </div>
    );
}

export default CommentList;