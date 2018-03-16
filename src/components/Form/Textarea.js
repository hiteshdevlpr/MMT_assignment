import React from 'react';

export default function Textarea(props) {
    return (<textarea ref={props.inputRef} onChange={props.handleChange} type={props.type} placeholder={props.placeholder}></textarea>);
}
