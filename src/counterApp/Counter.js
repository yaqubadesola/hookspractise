import {useReducer} from 'react'
import Decrement from './Decrement';
import DecrementByTen from './DecrementByTen';
import Increment from './Increment';
import IncrementByTen from './IncrementByTen';
import Reset from './Reset';
import Todo from './Todo';
import {initialState, reducer} from './useReducerState'
function Counter(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const increase = () => {
        dispatch({type: "increment"})
    }

    const decrease = () =>{
        dispatch({type: "decrement"})
    }

    const increaseByTen = () =>{
        dispatch({type: "incrementByTen", payload:10})
    }

    const decreaseByTen = () =>{
        dispatch({type: "decrementByTen", payload:10})
    }

    const reset = () =>{
        dispatch({type: "reset", payload:0})
    }
    return (
        <div style={{textAlign: "center"}}>
            <h1>{state.count}</h1>
            <Todo/> 
            <Increment increment={increase}/>
            <Decrement decrement={decrease}/>
            <IncrementByTen incrementByTen={increaseByTen}/>
            <DecrementByTen decrementByTen={decreaseByTen}/>
            <Reset reset={reset}/>
        </div>
    );
}

export default Counter;
//UseCallBack,  useMemo //They hooks, They work with function

//ReactMemo React.memo - done// not a hook and work with component using HOC

// import {memo} from 'react'