import React from 'react';

import Description from './QueriesSection/Description';
import PostTime from './QueriesSection/PostTime';
import Question from './QueriesSection/Question';
import RepliesSection from './repliesSection';

export default class QueriesSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionsList : this.props.questionsList
        }
    }
    render() {
        const ListItems = this.state.questionsList.map((question, index) => {
                return <li key={question.id}>
                    <Question question={question.question} />
                    <PostTime time={question.time} user={question.userName} />
                    <Description description={question.description} />
                    
                    <RepliesSection replies={question.replies} />
                </li>
            });
        return (
            <ul>
                {ListItems}
            </ul>
        );
    }
}