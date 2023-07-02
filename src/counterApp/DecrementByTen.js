import React from 'react';

function DecrementByTen(props) {
    return (  
        <button onClick={props.decrementByTen}>Decrement by 10</button>
    );
}

export default DecrementByTen;