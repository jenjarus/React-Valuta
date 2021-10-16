import React from "react";
import {connect} from "react-redux";

const ConverterRate = ({currencyFrom, currencyTo, arrRate}) => {
    return (
        <div className="line line_center">
            <div className="rate">1 {currencyFrom} = {arrRate[currencyTo]} {currencyTo}</div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        arrRate: state.arrRate,
        currencyFrom: state.currencyFrom,
        currencyTo: state.currencyTo,
    }
}

export default connect(mapStateToProps)(ConverterRate)
