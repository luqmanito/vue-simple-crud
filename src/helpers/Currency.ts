export const toFixed = (value: number, decimals: number) => {
  const calcDec = Math.pow(10, decimals);
  const roundedValue = Math.round(value * calcDec) / calcDec;
  return roundedValue.toFixed(decimals);
};

export function monetize(number:string, precision: number | null = null) {
  if (!number) return 0;

  return parseFloat(number).toLocaleString("id-ID", {
    minimumFractionDigits: precision || 2,
    maximumFractionDigits: precision || 3
  });
}

export function toRupiah(number:string, currencyType:string = "Rp") {

  if (!number) return `${currencyType} 0.00`;

  const amount = monetize(number);
  return `${currencyType} ${amount}`;
}
