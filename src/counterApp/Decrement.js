import React from 'react';

function Decrement(props) {
    return (
        <button onClick={props.decrement}>Decrement</button>
    );
}

export default Decrement;