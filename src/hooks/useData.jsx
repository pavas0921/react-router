import React, { useState, useEffect } from "react";

//Return data
const useData = (initalState, fn) => {
  const [data, setData] = useState(initalState);

  const getData = async () => {
    const fetch_data = await fn();
    setData(fetch_data);
    console.log("data****", data);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data };
};

export default useData;
