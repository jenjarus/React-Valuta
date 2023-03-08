import React, {useEffect, useState} from 'react';
import ConverterRate from './Components/ConverterRate';
import ConverterInput from './Components/ConverterInput';
import Switcher from './Components/Switcher';
import PopularCurrency from './Components/PopularCurrency';
import './styles/reset.css';
import './styles/base.scss';
import {useDispatch, useSelector} from "react-redux";
import {setData} from './actions';

const App = () => {
    const dispatch = useDispatch();
    const currencyFrom = useSelector((store) => store.currencyFrom);
    const [loading, setLoading] = useState(false);

    const api = async () => {
        const api_url = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFrom}`);
        const data = await api_url.json();

        dispatch(setData(data));
        setLoading(true);
    };

    useEffect(() => {
        api();
    }, [currencyFrom, loading]);

    const RenderContent = () => {
        if (loading) {
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
                        <div className="title">Конвертер <span className="red">валют</span></div>
                    </div>
                </div>
            </header>
            <main>
                <article className="container">
                    <div className="form_box">
                        <RenderContent/>
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

export default App;
