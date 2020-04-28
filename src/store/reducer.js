const initialState = {
    counter: 0,
    result: [],
}



const reducer = (state = initialState, action) => {
    /* if (action.type === "Increment") {
        const newState = { ...state, counter: state.counter + 1 };
        return newState;

    } */

    switch (action.type) {
        case "IncrementOne":
            //const newState = { ...state, counter: state.counter + 1 };
            //return newState;
            return {
                ...state, counter: state.counter + 1
            }
        // break;
        case "DecrementOne":
            // const changeState = { ...state, counter: state.counter - 1 };
            // return changeState;
            return {
                ...state, counter: state.counter - 1
            }
        // break;
        case "IncrementFive":
            // const updatedState = { ...state, counter: state.counter + action.value }
            // return updatedState;
            return {
                ...state, counter: state.counter + action.value
            }
        // break;
        case "DecrementFive":
            // const stateChange = { ...state, counter: state.counter - action.value }
            // return stateChange;
            return {
                ...state, counter: state.counter - action.value
            }
        // break;
        case "storeVal":
            //console.log("action.value===>",action.value);
            //let storeVal = { ...state, result: [...state.result, action.value] } //getting input value from action
            return { ...state, result: [...state.result, state.counter] } //storing the current calculated value of counter instead of getting input from action

        // break;
        case "deleteVal":
            //console.log("val===>",action.value);
            let replicaArr = [...state.result];
            replicaArr.splice(action.value, 1);
            //let deleteVal = { ...state, result: replicaArr }
            //return deleteVal
            return {
                ...state, result: replicaArr
            }
        // break;
        default: return state;
        // break;

    }




}

export default reducer;