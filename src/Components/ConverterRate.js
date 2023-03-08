import React from "react";
import {useSelector} from "react-redux";

const ConverterRate = () => {
    const currencyFrom = useSelector((store) => store.currencyFrom);
    const currencyTo = useSelector((store) => store.currencyTo);
    const arrRate = useSelector((store) => store.arrRate);

    return (
        <div className="line line_center">
            <div className="rate">1 {currencyFrom} = {arrRate[currencyTo]} {currencyTo}</div>
        </div>
    );
};

export default ConverterRate;
