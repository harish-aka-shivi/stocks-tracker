import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Line } from 'react-chartjs-2';
import './detail.css';
import moment from 'moment';
import { DataContext } from '../providers/DataProvider';

const Detail = () => {
  const { ticker } = useParams();
  const { savedMapping } = useContext(DataContext);
  const [labels, setLabels] = useState([]);
  const [yPoints, setYPoints] = useState([]);
  useEffect(() => {
    const labelsTemp = savedMapping[ticker].price.map(item => moment(item.time).format('h:mm:ss a'));
    const yPointsTemp = savedMapping[ticker].price.map(item => item.price);
    setLabels(labelsTemp);
    setYPoints(yPointsTemp);
  }, savedMapping);

  const data = {
    labels,
    datasets: [
      {
        label: `${ticker} dataset`,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: yPoints,
      },
    ],
  };

  return (
    <div className="detail-root">
      <div className="detail-responsive-container">
        <Line data={data} />
      </div>
    </div>
  );
};

export default Detail;
