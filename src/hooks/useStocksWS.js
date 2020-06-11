import { useEffect, useState } from 'react';
import useWebSockets from './useWebSockets';
import { WEBSOCKET_URL } from '../config';
import { HEADINGS } from '../constants';

const useStocksWS = () => {
  const data = useWebSockets(WEBSOCKET_URL);
  const [pricesByKey, setPricesByKey] = useState({});
  const [previousSocketMessage, setPreviousSocketMessage] = useState([]);
  useEffect(() => {
    if (previousSocketMessage === data || !data) {
      return;
    }
    const pricesByKeyCalc = data.reduce((acc, [name, price]) => {
      let stockVal = {};
      if (acc[name]) {
        if (acc[name].price > price) {
          stockVal = {
            [HEADINGS.ticker]: name,
            [HEADINGS.price]: price,
            [HEADINGS.lastUpdate]: Date.now(),
            color: 'red',
          };
        } else {
          stockVal = {
            [HEADINGS.ticker]: name,
            [HEADINGS.price]: price,
            [HEADINGS.lastUpdate]: Date.now(),
            color: 'green',
          };
        }
      } else {
        stockVal = {
          [HEADINGS.ticker]: name,
          [HEADINGS.price]: price,
          [HEADINGS.lastUpdate]: Date.now(),
          color: 'white',
        };
      }
      acc[name] = stockVal;
      return acc;
    }, { ...pricesByKey });
    setPricesByKey(pricesByKeyCalc);
    setPreviousSocketMessage(data);
  }, [data, pricesByKey, previousSocketMessage]);

  return pricesByKey;
};

export default useStocksWS;
