import React from "react";
import {useSelector} from 'react-redux';
import {arrFullName} from '../array_currency';

const SwitcherOption = () => {
    const arrRate = useSelector((store) => store.arrRate);

    const rates = Object.keys(arrRate);

    return rates.map((el) => {
        return <option key={el} value={el}>
            {arrFullName[el] ? arrFullName[el] : el}
        </option>
    })
};

export default SwitcherOption;
