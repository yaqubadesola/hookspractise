const initialState = {
    count: 20
  }
  
const reducer = (state, action) => {
// returns another version of state after action has been performed
switch (action.type) {
    case "increment":
    return {
        count : state.count + 1
    }
    case "decrement":
    return  {
        count : state.count - 1
    }
    case "incrementByTen":
    return {
        count : state.count + action.payload
    }
    case "decrementByTen":
    return  {
        count : state.count - action.payload
    }
    case "reset":
    return  {
        count : action.payload
    }
    default:
    return "Invalid no"
}

}

export {initialState, reducer}