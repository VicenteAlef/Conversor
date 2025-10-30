import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { Card, Content, Label, Title } from "./components/Components";
import { currencies } from "./constants/currencies";
import exchangeRateApi from "./services/api";
import { convertCurrency } from "./utils/convertCurrency";
import ResultCard from "./components/ResultCard";
import Input from "./components/Input";

function App() {
  const [amount, setAmount] = useState<string>("100");
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("BRL");
  const [result, setResult] = useState<string>("");
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  async function fetchExchangeRate() {
    const data = await exchangeRateApi(fromCurrency);
    const rate = data.rates[toCurrency];
    setExchangeRate(rate);

    const convertedAmount = convertCurrency(amount, rate);
    setResult(convertedAmount);
  }

  return (
    <div className="bg-[var(--background)] w-full h-screen flex flex-col justify-around items-center py-10 px-15 lg:px-[20%]">
      <Title>Conversor de Moedas</Title>
      <Content>
        <div className="grid grid-cols-1 w-full">
          <Card>
            <Label>De:</Label>
            <div className="grid grid-cols-4">
              {currencies.map((currency) => (
                <Button
                  variant="primary"
                  onClick={() => setFromCurrency(currency.code)}
                  key={currency.code}
                  currency={currency}
                  isSelected={fromCurrency === currency.code}
                />
              ))}
            </div>
            <Input label="Valor:" onChangeText={setAmount} value={amount} />

            <Label>Para</Label>
            <div className="grid grid-cols-4">
              {currencies.map((currency) => (
                <Button
                  variant="secondary"
                  onClick={() => setToCurrency(currency.code)}
                  key={currency.code}
                  currency={currency}
                  isSelected={toCurrency === currency.code}
                />
              ))}
            </div>
          </Card>
        </div>
        <button
          onClick={fetchExchangeRate}
          className="bg-[var(--secondary)] py-2 px-[24px] rounded-md text-white font-medium my-5 hover:opacity-80 cursor-pointer"
        >
          Converter
        </button>
        <ResultCard
          exchangeRate={exchangeRate}
          result={result}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          currencies={currencies}
        />
      </Content>
      <a
        target="_blank"
        href="https://www.vicentedeveloper.com"
        className="text-gray-600 my-5"
      >
        Vicente Developer - 2025
      </a>
    </div>
  );
}

export default App;
