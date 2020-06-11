import * as React from 'react';
import useStocksWS from '../../hooks/useStocksWS';

export const DataContext = React.createContext({
  pricesByKey: {},
  savedMapping: [],
});

const DataProvider = ({ ...props }) => {
  const {
    pricesByKey,
    savedMapping,
  } = useStocksWS();

  return (
    <DataContext.Provider
      value={{
        pricesByKey,
        savedMapping,
      }}
      {...props}
    />
  );
};

export default DataProvider;
