import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RandomComponent = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const val = await axios.get(
          'http://hn.algolia.com/api/v1/search?query=foo&tags=story'
        );
        setData(val);
        console.log(val);
        console.log(val.data.hits[0].title);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, [data]);
  return <div>{data.data?.hits[0].title}</div>;
};

export default RandomComponent;
