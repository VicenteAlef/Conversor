export function convertCurrency(amount: string, rate: number): string {
  return (parseFloat(amount) * rate).toFixed(2);
}
