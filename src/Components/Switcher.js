import React from "react";
import SwitcherOption from "./SwitcherOption";
import {useDispatch, useSelector} from "react-redux";
import {setCurrencyFrom, setCurrencyTo} from "../actions";

const Switcher = () => {
    const dispatch = useDispatch();
    const currencyTo = useSelector((store) => store.currencyTo);
    const currencyFrom = useSelector((store) => store.currencyFrom);

    const swap = () => {
        dispatch(setCurrencyFrom(currencyTo));
        dispatch(setCurrencyTo(currencyFrom));
    };

    const setCurrency = (select) => {
        switch (select) {
            case 'from':
                return function (e) {
                    dispatch(setCurrencyFrom(e.target.value));
                };
            case 'to':
                return function (e) {
                    dispatch(setCurrencyTo(e.target.value));
                };
            default:
                console.log('Упс...');
                break;
        }
    };

    return (
        <div className="line line_conversion">
            <select value={currencyFrom} onChange={setCurrency('from')}>
                <SwitcherOption/>
            </select>
            <button id="swap" onClick={swap}/>
            <select value={currencyTo} onChange={setCurrency('to')}>
                <SwitcherOption/>
            </select>
        </div>
    );
};

export default Switcher;

