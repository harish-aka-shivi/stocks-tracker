import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import useWebSockets from './useWebSockets';
import { WEBSOCKET_URL } from '../config';
import { HEADINGS } from '../constants';

const useStocksWS = () => {
  const data = useWebSockets(WEBSOCKET_URL);
  const [pricesByKey, setPricesByKey] = useState({});
  const [savedMapping, setSavedMapping] = useLocalStorage('storredMapping', {});

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

    // saving only 10 values
    const savedMappingTemp = { ...savedMapping };
    data.forEach(([name, price]) => {
      const savedForName = savedMappingTemp[name];
      if (savedForName && savedForName.price && savedForName.price.length > 10) {
        savedForName.price.shift();
        savedForName.price.push({
          time: Date.now(),
          price,
        });
      } else if (savedForName && savedForName.price && savedForName.price.length < 10) {
        savedForName.price.push({
          time: Date.now(),
          price,
        });
      } else {
        // savedForName = [price];
        savedMappingTemp[name] = {
          price: [{
            time: Date.now(),
            price: [price],
          }],
        };
      }
    });

    setSavedMapping(savedMappingTemp);
    setPricesByKey(pricesByKeyCalc);
    setPreviousSocketMessage(data);
  }, [
    data,
    pricesByKey,
    previousSocketMessage,
    savedMapping,
    setSavedMapping,
    setPricesByKey,
    setPreviousSocketMessage,
  ]);

  return {
    pricesByKey,
    savedMapping,
  };
};

export default useStocksWS;
