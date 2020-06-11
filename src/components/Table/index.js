import React from 'react';
import './table.css';
import { getColor } from '../../constants';


const THead = props => (
  <thead {...props} />
);

const TRow = ({ color, ...props }) => (
  <tr
    style={{ backgroundColor: getColor(color) }}
    {...props}
  />
);

const TH = props => (
  <th {...props} />
);

const TD = props => (
  <td {...props} />
);

const TBody = props => (
  <tbody {...props} />
);


const Table = props => (
  <table {...props} />
);


Table.THead = THead;
Table.TBody = TBody;
Table.TH = TH;
Table.TRow = TRow;
Table.TD = TD;

export default Table;
