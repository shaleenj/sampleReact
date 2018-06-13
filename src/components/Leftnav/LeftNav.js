import React from 'react';

export function LeftNav(props) {
    return (
        <div className='left-nav'>
        <label>{props.header}</label>
            <ul>
                <li onClick={ () => handleClick('Home', props)}> Home</li>
                <li onClick={ () => handleClick('Login', props)}> Login</li>
                <button onClick={ () => handleClick('Add', props)}>Add</button>
            </ul>
        </div>  
        
    );
}

function handleClick(source, props){
    props.changeView(source);
}