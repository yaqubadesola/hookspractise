import React,{useMemo, useState, useCallback} from 'react';

function Todo(props) {
    const [todos, setTodos] = useState([])
    function getSum(num){
        console.log("got calculated")
        let sum = 0
        for(let i = 0; i < num; i++){
            sum+=i
        }
        return sum
    }

    const todo = "New Todo"
    const addTodo = useCallback(() => setTodos([...todos, todo]),[5])
    
    const getTotalSum = useMemo(() => getSum(1000), [todos])
    return (
       
        <div> {console.log("Todos",todos)}
            <button onClick={addTodo}>Add Todo</button>
            {getTotalSum}
        </div>
    );
}

export default React.memo(Todo);

//HOC