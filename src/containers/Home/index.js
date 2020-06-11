import React from 'react';

import './home.css';
import Table from '../../components/Table';
import useStocksWS from '../../hooks/useStocksWS';
import { HEADINGS, PRETTY_NAME } from '../../constants';

const headings = Object.keys(HEADINGS);

const Home = () => {
  const data = useStocksWS();

  return (
    <div className="home-root">
      <div className="home-responsive-container">
        <Table>
          <Table.THead>
            <Table.TRow>
              {headings.map(heading => (
                <Table.TH>
                  {PRETTY_NAME[heading]}
                </Table.TH>
              ))}
            </Table.TRow>
          </Table.THead>
          <Table.TBody>
            {Object.keys(data).map(key => (
              <Table.TRow
                key={key}
                color={data[key].color}
              >
                {headings.map(heading => (
                  <Table.TD>
                    {data[key][heading]}
                  </Table.TD>
                ))}
              </Table.TRow>
            ))}
          </Table.TBody>
        </Table>
      </div>
    </div>
  );
};


export default Home;
