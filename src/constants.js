export const HEADINGS = {
  ticker: 'ticker',
  price: 'price',
  lastUpdate: 'lastUpdate',
};

export const PRETTY_NAME = {
  ticker: 'Ticker',
  price: 'Price',
  lastUpdate: 'Last Update',
};

const LIGHT_RED = '#FBE9E7';
const LIGHT_GREEN = '#E8F5E9';
const WHITE = 'white';

export const getColor = colorStr => {
  if (colorStr === 'red') {
    return LIGHT_RED;
  } if (colorStr === 'green') {
    return LIGHT_GREEN;
  }
  return WHITE;
};
