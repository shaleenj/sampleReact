import React from 'react';
import { Home } from './Home';
import { Add } from './Add';
import { LoginForm } from './Login';

export function WorkArea(props) {
    return (
        <div>
            {
            props.currentView === 'Home' &&
            <div>
                <div>
                    <Home />
                </div>
                <button onClick={ () => handleClick()}>Click</button>
            </div> 
            }
            {
            props.currentView === 'Add' &&
            <div>
                <div>
                    <Add />
                </div>
                <button onClick={ () => handleClick() }>Add</button>
            </div> 
            }
            {
                props.currentView === 'Login' &&
                <div>
                    <LoginForm/>
                </div>
            }

        </div>
    );
}

function handleClick() {
    console.log('OK!');
}