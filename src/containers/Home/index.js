import React, { useContext } from 'react';

import './home.css';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Table from '../../components/Table';
import { HEADINGS, PRETTY_NAME } from '../../constants';
import { DataContext } from '../providers/DataProvider';

const headings = Object.keys(HEADINGS);

const Home = () => {
  const history = useHistory();
  const { pricesByKey: data } = useContext(DataContext);
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
                onClick={() => history.push(`/${key}`)}
              >
                {headings.map(heading => {
                  if (heading === HEADINGS.lastUpdate) {
                    return (
                      <Table.TD>
                        {moment(data[key][heading]).startOf('second').fromNow()}
                      </Table.TD>
                    );
                  }
                  return (
                    <Table.TD>
                      {data[key][heading]}
                    </Table.TD>
                  );
                })}
              </Table.TRow>
            ))}
          </Table.TBody>
        </Table>
      </div>
    </div>
  );
};


export default Home;
