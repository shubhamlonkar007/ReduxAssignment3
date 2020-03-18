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
            const newState = { ...state, counter: state.counter + 1 };
            return newState;
            break;
        case "DecrementOne":
            const changeState = { ...state, counter: state.counter - 1 };
            return changeState;
            break;
        case "IncrementFive":
            const updatedState = { ...state, counter: state.counter + action.value }
            return updatedState;
            break;
        case "DecrementFive":
            const stateChange = { ...state, counter: state.counter - action.value }
            return stateChange;
            break;
        case "storeVal":
            //console.log("action.value===>",action.value);
            let storeVal = { ...state, result: [...state.result, action.value] }
            return storeVal
            break;
        case "deleteVal":
            //console.log("val===>",action.value);
            let replicaArr = [...state.result];
            replicaArr.splice(action.value,1);
            let deleteVal = {...state,result: replicaArr}
            return deleteVal
            break;
        default: return state;
            break;

    }




}

export default reducer;