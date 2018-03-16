import React from 'react';

export default function Button(props) {
    return (<button type="submit" onClick={props.handleClick}>{props.name}</button>)
}