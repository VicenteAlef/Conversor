import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { Card, Label, Title } from "./components/Components";
import { currencies } from "./constants/currencies";

function App() {
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("BRL");

  return (
    <div className="bg-[var(--background)] w-full h-screen flex flex-col justify-start items-center pt-20">
      <Title>Conversor de Moedas</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        </Card>
        <Card>
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
    </div>
  );
}

export default App;
