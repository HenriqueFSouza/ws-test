export const formatCurrency = (value: string) => {
  const numericValue = value.replace(/\D/g, "");
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const formattedValue = formatter.format(Number(numericValue) / 100);
  return formattedValue;
};