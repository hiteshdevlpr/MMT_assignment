import React from 'react';

export default function(props) {
    return (<div className="l-display-flex l-flex-column l-margin-right l-align-self-center">
                <span onClick={props.handleUpvote.bind(this, props.replyId)} className="arrow-up"></span>    
                <span className="t-text-center">{props.votes}</span>    
                <span onClick={props.handleDownvote.bind(this, props.replyId)} className="arrow-down"></span>    
            </div>)
}