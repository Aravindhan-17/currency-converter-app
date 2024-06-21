import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [amount, setAmount] = useState(null);
  const [fromCurrency, setFromCurrency] = useState(null);
  const [toCurrency, setToCurrency] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    const getvalue = async () => {
      try {
        setLoading(true);
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response = await axios.get(url);
        setExchangeRate(response.data.rates[toCurrency]);
      } catch (error) {
        console.error("Error while fetching data", error);
      }
    };
    getvalue();
    setLoading(false);
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (amount !== null && exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  const handle = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? null : value);
  };

  const changeFrom = (e) => {
    setFromCurrency(e.target.value);
  };

  const changeTo = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>Currency Converter</h1>
        <div className="box"></div>
        <div className="data">
          <div className="input-container">
            <label htmlFor="amt">Amount:</label>
            <input type="number" id='amt' value={amount} onChange={handle} />
          </div>
          <div className="input-container">
            <label htmlFor="from">From Currency:</label>
            <select id='from' value={fromCurrency} onChange={changeFrom}>
              <option value="">Select From Currency</option>
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="to">To Currency:</label>
            <select id='to' value={toCurrency} onChange={changeTo}>
              <option value="">Select To Currency</option>
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>
            </select>
          </div>
          {loading && <p>Please wait while loading.....</p>}
          { amount!==null && convertedAmount !== null && fromCurrency!==null && toCurrency!==null && fromCurrency!=="" && toCurrency!=="" &&
           fromCurrency!==toCurrency && (
            <div className="result">
              {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
