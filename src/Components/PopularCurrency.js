import React from "react";
import {arrFullName, arrSymbol} from '../array_currency'
import {connect} from "react-redux";

const PopularCurrency = ({currency, amount, arrRate}) => {
    const value = () => {
        const value = (amount * arrRate[currency]).toFixed(2);
        return value;
    };

    return (
        <div className="line">
            <span className="text">{arrFullName[currency]}</span>
            <span className="value">{value()} {arrSymbol[currency] ? arrSymbol[currency]: currency}</span>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        arrRate: state.arrRate,
        amount: state.amount,
    }
}

export default connect(mapStateToProps)(PopularCurrency)
