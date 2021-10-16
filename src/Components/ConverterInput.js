import React from "react";
import {connect} from "react-redux";
import {setAmount} from "../actions";
import {arrSymbol} from "../array_currency";

const ConverterInput = ({amount, currencyTo, arrRate, setAmount}) => {
    const handleAmount = (e) => {
        setAmount(e.target.value);
    };

    const value = () => {
        const value = (amount * arrRate[currencyTo]).toFixed(2);
        return value;
    };

    return (
        <div className="line line_col">
            <input type="number" placeholder="0" defaultValue="100" onChange={handleAmount} />
                <span className="value">{value()} {arrSymbol[currencyTo] ? arrSymbol[currencyTo]: currencyTo}</span>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        arrRate: state.arrRate,
        currencyTo: state.currencyTo,
        amount: state.amount,
    }
}
const mapDipatchToProps = {
    setAmount
};

export default connect(mapStateToProps, mapDipatchToProps)(ConverterInput)
