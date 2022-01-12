import React, {useEffect} from 'react';
import ConverterRate from './Components/ConverterRate'
import ConverterInput from './Components/ConverterInput'
import Switcher from './Components/Switcher'
import PopularCurrency from './Components/PopularCurrency'
import './styles/reset.css'
import './styles/base.scss'
import {connect} from "react-redux";
import {setData, setLoading} from './actions'

const App = ({loading, currencyFrom, setData, setLoading}) => {
  const api = async () => {
    const api_url = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFrom}`);
    const data = await api_url.json();

    setData(data);
    setLoading(true);
  };

  useEffect(() => {
    api();
  }, [currencyFrom, loading]);

  const abc = () => {
    if(loading) {
      return <>
        <ConverterRate/>
        <Switcher/>
        <ConverterInput/>
        <PopularCurrency currency={'USD'}/>
        <PopularCurrency currency={'EUR'}/>
      </>
    } else {
      return <div>Загрузка...</div>
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <div className="title">Калькулятор <span className="red">валюты</span></div>
          </div>
        </div>
      </header>
      <main>
        <article className="container">
          <div className="form_box">
            {abc()}
          </div>
        </article>
      </main>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="copy">©Jenjarus <span className="year">2077</span></div>
          </div>
        </div>
      </footer>
    </>
  );
};


function mapStateToProps(state) {
  return {
    loading: state.loading,
    currencyFrom: state.currencyFrom,
  }
}

const mapDipatchToProps = {
  setData,
  setLoading,
};

export default connect(mapStateToProps, mapDipatchToProps)(App)
