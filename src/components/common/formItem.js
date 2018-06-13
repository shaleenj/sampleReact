import React from 'react';

export function FormItem(props) {
    return (
        <div className='form-item'>
            <label>{props.label}</label>
            <input type={props.type}/>
        </div>
    );
}