import React from 'react';

import Button from './Form/Button'
import Input from './Form/Input'
import Textarea from './Form/Textarea'

import './Form/form.css'

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: true,
            formInputData: {
                userName: {
                    isValid: true,
                    value: ''
                },
                email: {
                    isValid: true,
                    value: ''
                },
                phone: {
                    isValid: true,
                    value: ''
                },
                comment: {
                    value: '',
                    isValid: true,
                    charAdded: 0
                }
            },
            formErrors: {
                userName: {
                    error: 'Enter a valid Username'
                },
                email: {
                    error: 'Enter a valid Email Id'
                },
                phone: {
                    error: 'Enter a valid phone number'
                },
                comment: {
                    error: 'Comment can not exceed max characters'
                }
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        let formData = this.state.formInputData;
        if ( formData.userName.isValid && formData.email.isValid && formData.phone.isValid && formData.comment.isValid ) {
            this.props.getData({
                userName: this.state.formInputData.userName.value,
                email: this.state.formInputData.email.value,
                phone: this.state.formInputData.phone.value,
                comment: this.state.formInputData.comment.value,
            });
            this.emailValue.value = '';
            this.phoneValue.value = '';
            this.userNameValue.value = '';
            this.commentValue.value = '';           
        } else {
            return; 
        }
    }
    handleInputChange(type) {
        let state = Object.assign({}, this.state);
        if(type == 'email') {
            let emailVal = this.emailValue.value;
            state.formInputData.email = {
                isValid: emailVal.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
                value: emailVal
            }
        } else if (type == 'text') {
            let userName = this.userNameValue.value; 
            state.formInputData.userName = {
                isValid: userName.match(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/),
                value: userName
            }          
        } else if (type == 'phone') {
            let phoneNumber = this.phoneValue.value;
            state.formInputData.phone = {
                isValid: phoneNumber.match(/^((?!(0))[0-9]{10})$/),
                value: phoneNumber
            }            
        } else {
            let charVal = this.commentValue.value.length;
            if(charVal >= this.props.formData.maxChar) {
                state.formInputData.comment.isValid = false;
            } else 
                state.formInputData.comment.isValid = true;

            state.formInputData.comment.value = this.commentValue.value;
            state.formInputData.comment.charAdded = this.commentValue.value.length;
        }
        this.setState(state);
    }
    render() {
        return (
            <div className="post-form">
                <div className="l-display-flex">
                    <Input inputRef={el => this.userNameValue = el} isValid={this.state.formInputData.userName.isValid} type="text" 
                            errorMessage={this.state.formErrors.userName.error} 
                            handleChange={this.handleInputChange} placeholder="Enter Your Name" />

                    <Input inputRef={el => this.emailValue = el} type="email" 
                            isValid={this.state.formInputData.email.isValid} errorMessage={this.state.formErrors.email.error} 
                            handleChange={this.handleInputChange} placeholder="Enter your email Id"/>

                    <Input inputRef={el => this.phoneValue = el} type="phone" 
                            isValid={this.state.formInputData.phone.isValid} errorMessage={this.state.formErrors.phone.error} 
                            handleChange={this.handleInputChange} placeholder="909988998"/>
                </div>
                <Textarea inputRef={el => this.commentValue = el} errorMessage={this.state.formErrors.comment.error} 
                        isValid={this.state.formInputData.comment.isValid} handleChange={this.handleInputChange} 
                        placeholder="Enter your comment here" />
                <p className={"character-counter " + (!this.state.formInputData.comment.isValid ? 'has-error' : '')}>{this.state.formInputData.comment.charAdded} of {this.props.formData.maxChar} characters left</p>
                <Button name="Submit" handleClick={this.handleSubmit}/>
            </div>
        )
    }
}