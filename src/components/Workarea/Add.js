import React from 'react';
import { FormItem } from '../common/formItem';

export function Add(props) {
    return (
        <div>
            <div>
                <FormItem label='Book Title:' type='input'/>
                <FormItem label='Author Name:' type='input'/>
            </div>
        </div>
    );
}