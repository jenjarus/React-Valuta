const initialState = {
    currencyFrom: 'USD',
    currencyTo: 'RUB',
    amount: 100,
    arrRate: {},
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_DATA':
            return {
                ...state,
                arrRate: action.data.rates,
            };
        case 'SET_CUR_FROM':
            return {
                ...state,
                currencyFrom: action.currencyFrom,
            };
        case 'SET_CUR_TO':
            return {
                ...state,
                currencyTo: action.currencyTo,
            };
        case 'SET_AMOUNT':
            return {
                ...state,
                amount: action.amount,
            };
        default:
            return state;
    }
}
