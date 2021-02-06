import {
    INCREASE,
    DECREASE,
    SPECIFIC_NUMBER,
    ADD_PRODUCT
} from '../constants/constant'

const initialState = {
    number: 0,
    Products: [
        "Orange",
        "Banana",
        "Apple",
        "Watermelon"
    ]
}

// Reducer
const Reducer = (state = initialState, action) => {
    switch(action.type){
        case INCREASE: return {
            ...state,
            number: state.number + 1
        }
        case DECREASE: 
            if(state.number == 0){
                alert("უდრის 0 - ს")
                return state
            }else{
                return {
                    ...state,
                    number: state.number - 1
                }
            }
        case SPECIFIC_NUMBER: return {
            ...state,
            number: action.payload
        }
        case ADD_PRODUCT:
            if(state.Products.includes(action.payload)){
                alert("პროდუქტი უკვე არსებობს")
                return state;
            }
            let arr = state.Products;
            arr.push(action.payload);
            return {
                ...state,
                Products: [...arr]
            }
        default: {
            console.log("default")
            return state
        }
    }
}

export default Reducer