import { useEffect, useState } from 'react';

const useWebSockets = url => {
  const [data, setValue] = useState([]);

  useEffect(() => {
    try {
      const socket = new WebSocket(url);
      socket.onmessage = event => {
        setValue(JSON.parse(event.data));
      };
      socket.onerror = evt => {
        console.log(evt);
      };
    } catch (e) {
      setValue([]);
    }
  }, [url]);
  return data;
};

export default useWebSockets;
