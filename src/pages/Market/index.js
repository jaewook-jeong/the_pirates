import React, { useEffect, useState } from 'react';
import { MarketLayout, SearchBox } from './style';

import { bannerData, storeData } from '../../data/demo_data';
import Rolling from '../../components/molecules/rolling';
import Header from '../../components/organism/Header';
import LocationFilter from '../../components/organism/LocationFilter';
import Input from '../../components/atoms/input';
import StoreCard from '../../components/organism/StoreCard';

const Market = () => {
  const [storeCount, setStoreCount] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [storeDataList, setStoreDataList] = useState([]);

  useEffect(() => {
    //최초 접속 시
    const data = storeData.slice(0,10);
    data.length !== 10 ? setHasMoreData(false) : setStoreCount(data.length);
    setStoreDataList(data);
  }, []);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMoreData) {
          const data = storeData.slice(storeCount, storeCount + 10);
          data.length !== 10 ? setHasMoreData(false) : setStoreCount(prev => prev + 10);
          setStoreDataList((prev) => {
            return (
              prev.concat(data)
            )
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMoreData, storeCount]);

  return(
    <MarketLayout>
      <Header/>
      {
        bannerData && <Rolling data={bannerData} />
      }
      <LocationFilter />
      <SearchBox>
        <Input />
      </SearchBox>
      {
        storeDataList.map((v) => <StoreCard data={v} key={v.id}/>)
      }
    </MarketLayout>
  );
};

export default Market;