import React from 'react';

import Description from './QueriesSection/Description';
import PostTime from './QueriesSection/PostTime';
import Votes from './QueriesSection/Votes';

export default class RepliesSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            replies: this.props.replies
        };
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
        this.sortReplies = this.sortReplies.bind(this);        
    }
    componentDidMount() {
        this.sortReplies();
    }
    sortReplies() {
        let replies = this.state.replies;
        replies.sort(function(item1,item2) {
            return item2.votes - item1.votes
        });
        this.setState({replies: replies});
    }
    handleUpvote (replyId) {
        let replies = this.state.replies;
        replies.forEach(element => {
            if(element.id == replyId) {
                element.votes++;
            }
        });
        this.setState({replies: replies});
        this.sortReplies()
    }
    handleDownvote (replyId) {
        let replies = this.state.replies;
        replies.forEach(element => {
            if(element.id == replyId) {
                element.votes--;
            }
        });
        this.setState({replies: replies});
        this.sortReplies();
            
    }
    render() {
        return (
            <ul>
                {this.state.replies.map((reply) => {
                    return <li key={reply.id} className="l-display-flex">
                        <Votes handleDownvote={this.handleDownvote} handleUpvote={this.handleUpvote} votes={reply.votes} replyId={reply.id} />
                        <div>
                            <PostTime time={reply.time} user={reply.userName} />
                            <Description description={reply.description} />
                            <div className="l-display-flex">
                                <a href="#" className="l-margin-right">18 comments</a>
                                <span className="l-margin-right">|</span>
                                <a href="#" className="l-margin-right">blog this</a>
                                <span className="l-margin-right">|</span>
                                <span>Category: </span><a href="#">links</a>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        )
    }
}