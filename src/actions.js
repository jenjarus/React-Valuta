export function setData(data) {
    return {
        type: 'SET_DATA',
        data: data,
    }
}
export function setCurrencyFrom(val) {
    return {
        type: 'SET_CUR_FROM',
        currencyFrom: val,
    }
}
export function setCurrencyTo(val) {
    return {
        type: 'SET_CUR_TO',
        currencyTo: val,
    }
}
export function setAmount(val) {
    return {
        type: 'SET_AMOUNT',
        amount: val,
    }
}

