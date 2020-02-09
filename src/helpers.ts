const formatter = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 2,
  style: 'decimal',
});

export const getCurrencyFormat = (amount: number): string =>
  `$${formatter.format(amount)}`;
