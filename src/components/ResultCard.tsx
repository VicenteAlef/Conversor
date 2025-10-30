interface ResultCardProps {
  exchangeRate: number | null;
  result: string;
  fromCurrency: string;
  toCurrency: string;
  currencies: { code: string; symbol: string }[];
}

const ResultCard = ({
  exchangeRate,
  result,
  fromCurrency,
  toCurrency,
  currencies,
}: ResultCardProps) => {
  if (!result || !exchangeRate) return null;

  const toSymbol = currencies.find(
    (currency) => currency.code === toCurrency
  )?.symbol;
  return (
    <div className="w-full bg-[var(--cardBackground)] rounded-md p-[23px]">
      <div className="text-[var(--text)] mb-[8px] text-lg font-medium">
        Resultado:
      </div>
      <div className="text-[var(--text)] text-2xl font-medium">{`${toSymbol} ${result}`}</div>
      <div className="text-[var(--textSecondary)]">
        Taxa de Câmbio 1: {fromCurrency} = {exchangeRate.toFixed(3)}{" "}
        {toCurrency}
      </div>
    </div>
  );
};

export default ResultCard;
