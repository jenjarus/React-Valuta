import React from "react";
import { connect } from 'react-redux'
import {arrFullName} from '../array_currency'

const SwitcherOption = ({arrRate}) => {
    const rates = Object.keys(arrRate);
    
    return rates.map((el) => {
        return <option key={el} value={el}>
            {arrFullName[el] ? arrFullName[el]: el}
        </option>
    })
};

function mapStateToProps(state) {
    return {
        arrRate: state.arrRate,
    }
}

export default connect(mapStateToProps)(SwitcherOption)
