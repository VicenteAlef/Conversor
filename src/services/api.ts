const BASE_URL = "https://api.exchangerate-api.com/v4/latest";

export default async function exchangeRateApi(fromCurrency: string) {
  try {
    const response = await fetch(`${BASE_URL}/${fromCurrency}`);
    const data = await response.json();
    return data;
  } catch (error: string | unknown) {
    console.log(error);
  }
}
