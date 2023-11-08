import {useEffect, useState} from 'react';

import IBuilding from '../interfaces/common/Building';
import IGetBuildingsResponse from '../interfaces/api/Buildings';

const mockData = require('../../example-data.json');

export default () => {
  const [data, setData] = useState<IBuilding[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const onSuccess = (response: IGetBuildingsResponse) => {
    setData(response.buildings);
    setLoading(false);
  };

  const onError = (err: string) => {
    setError(err.toString());
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await mockData;

        setTimeout(() => {
          onSuccess(response);
        }, 1000);
      } catch (err) {
        onError('Error fetching data');
      }
    };
    fetchData();
  }, []);

  return {data, loading, error};
};
