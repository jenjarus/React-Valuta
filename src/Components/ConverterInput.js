import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAmount} from "../actions";
import {arrSymbol} from "../array_currency";

const ConverterInput = () => {
    const dispatch = useDispatch();
    const amount = useSelector((store) => store.amount);
    const currencyTo = useSelector((store) => store.currencyTo);
    const arrRate = useSelector((store) => store.arrRate);
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(Number((amount * arrRate[currencyTo])).toLocaleString('ru-RU', {minimumFractionDigits: 2}));
    }, [amount, arrRate]);

    const handleAmount = (e) => {
        dispatch(setAmount(e.target.value));
    };

    return (
        <div className="line line_col">
            <input type="number" placeholder="0" value={amount} onChange={handleAmount}/>
            <span className="value">{value} {arrSymbol[currencyTo] ? arrSymbol[currencyTo] : currencyTo}</span>
        </div>
    );
};

export default ConverterInput;
