import React from 'react'

function Button(props) {

    const toggle = ()=>{
        props.toggle();
    }

    return (
        <div>
            <button onClick={props.toggle} type="button" className={`button btn btn-${props.mode}`} id="dark">{props.text}</button>
        </div>
    )
}

export default Button