import React, {useEffect, useState} from "react";
import {arrFullName, arrSymbol} from '../array_currency';
import {useSelector} from "react-redux";

const PopularCurrency = ({currency}) => {
    const amount = useSelector((store) => store.amount);
    const arrRate = useSelector((store) => store.arrRate);
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(Number((amount * arrRate[currency])).toLocaleString('ru-RU', {minimumFractionDigits: 2}));
    }, [amount, arrRate]);

    return (
        <div className="line">
            <span className="text">{arrFullName[currency]}</span>
            <span className="value">{value} {arrSymbol[currency] ? arrSymbol[currency] : currency}</span>
        </div>
    );
};

export default PopularCurrency;
