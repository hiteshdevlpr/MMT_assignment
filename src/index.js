import React from 'react';
import ReactDOM from 'react-dom';
import './components/common.css';

import QueriesSection from './components/QueriesSection';
import Form from './components/Form';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "questionsList": [{
                "question": "How to change color of vector drawable path on button click?",
                "userName": "kayode ",
                "time": "14 hours 36 minutes",
                "description": "With the new android support update, vector drawables get backward compatibility. I have a vector image with various paths. I want the color of the paths to change on click of a button or programmatically based on an input value. Is it possible to access the name parameter of the vector path? And then change the color.",
                "id": "5128735",
                "replies": [
                    {
                    "userName": "userName,",
                    "time": "time,",
                    "description": "You cannot change the color of individual path at runtime. Looking at the source code of VectorDrawableCompat, the only method to expose the inner element by name is getTargetByName which is present in inner private state class VectorDrawableCompatState of VectorDrawableCompat.",
                    "votes": 1,
                    "id": "79816"
                    },
                    {
                    "userName": "userName,",
                    "time": "time,",
                    "votes": 6,
                    "description": "You cannot change the color of individual path at runtime. Looking at the source code of VectorDrawableCompat, the only method to expose the inner element by name is getTargetByName which is present in inner private state class VectorDrawableCompatState of VectorDrawableCompat.",
                    "id": "45645645"
                    },
                    {
                    "userName": "userName,",
                    "time": "time,",
                    "votes": 7,
                    "description": "You cannot change the color of individual path at runtime. Looking at the source code of VectorDrawableCompat, the only method to expose the inner element by name is getTargetByName which is present in inner private state class VectorDrawableCompatState of VectorDrawableCompat.",
                    "id": "7687687"
                    },
                    {
                    "userName": "userName,",
                    "time": "time,",
                    "votes": 2,
                    "description": "You cannot change the color of individual path at runtime. Looking at the source code of VectorDrawableCompat, the only method to expose the inner element by name is getTargetByName which is present in inner private state class VectorDrawableCompatState of VectorDrawableCompat.",
                    "id": "213213"
                    }
                ]
            }],
            "formData": {
                "maxChar": 200
            }
        }
        this.addReply = this.addReply.bind(this);
    }
    addReply(data) {
        let state = Object.assign({}, this.state);
        state.questionsList[0].replies.push({
            "userName": data.userName,
            "time": data.time,
            "votes": 0,
            "description": data.comment,
            "id": Math.random().toString().substr(2, 8)
        });
        this.setState(state);
    }
    render() {
        return (
            <div>
                <QueriesSection questionsList={this.state.questionsList} />
                <Form formData={this.state.formData} getData={this.addReply} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));