import React from "react";
import SwitcherOption from "./SwitcherOption";
import {connect} from "react-redux";
import {setCurrencyFrom, setCurrencyTo} from "../actions";

const Switcher = ({currencyFrom, currencyTo, setCurrencyFrom, setCurrencyTo}) => {
    const swap = () => {
        const swaps = currencyFrom;
        setCurrencyFrom(currencyTo);
        setCurrencyTo(swaps);
    };

    const setCurrency = (select) => {
        if(select === 'from') {
            return function(e) {
                setCurrencyFrom(e.target.value);
            }
        } else if (select === 'to') {
            return function(e) {
                setCurrencyTo(e.target.value);
            }
        } else {
            console.log('Упс...');
        }
    };

    return (
        <div className="line line_conversion">
            <select value={currencyFrom} onChange={setCurrency('from')}>
                <SwitcherOption />
            </select>
            <button id="swap" onClick={swap}></button>
            <select value={currencyTo} onChange={setCurrency('to')}>
                <SwitcherOption />
            </select>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        currencyFrom: state.currencyFrom,
        currencyTo: state.currencyTo,
    }
}
const mapDipatchToProps = {
    setCurrencyFrom,
    setCurrencyTo
};

export default connect(mapStateToProps, mapDipatchToProps)(Switcher)

