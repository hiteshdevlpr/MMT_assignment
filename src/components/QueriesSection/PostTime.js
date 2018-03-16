import React from 'react';

export default function PostTime(props) {
    return <span className="t-font-italic t-font-s">{props.isQuestion ? 'Asked by' : 'Posted by'} {props.user} {props.time}</span>
}