import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native';
import { AuthContext } from '../../core/context/AuthContext';
import useFetch from '../../core/hooks/useFetch';

function Tela2() {
  const { data, setData, user } = useContext(AuthContext);

  async function getData() {
    const respose = await useFetch({ method: 'get', url: '/news' });
    setData(respose.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Text style={{ fontSize: 22 }}>
      {data} {user.name}
    </Text>
  );
}

export default Tela2;
