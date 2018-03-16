import React from 'react';

export default function Input(props) {
    return (
        <div className="input-container">
            <input style={!props.isValid ? {borderColor: 'red'}: {}} ref={props.inputRef} type={props.type} onChange={props.handleChange.bind(this, props.type)} placeholder={props.placeholder}/>
            <span className={"error-message " + (!props.isValid ? 'has-error' : '')}>{props.errorMessage}</span>
        </div>
    );
}
