import {
    INCREASE,
    DECREASE,
    SPECIFIC_NUMBER,
    ADD_PRODUCT
} from '../constants/constant'

const increaseNumber = () => {
    return {
        type: INCREASE
    }
}

const decreaseNumber = () => {
    return {
        type: DECREASE
    }
}

const specificNumber = (number) => {
    return {
        type: SPECIFIC_NUMBER,
        payload: number
    }
}

const addProduct = (productName) => {
    return {
        type: ADD_PRODUCT,
        payload: productName
    }
}

export {
    specificNumber,
    decreaseNumber,
    increaseNumber,
    addProduct
}