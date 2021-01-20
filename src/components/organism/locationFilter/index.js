import React, { useCallback, useState } from 'react';
import Accordion from '../../molecules/accordion';
import Button from '../../atoms/button';
import { BiCaretDown } from 'react-icons/bi'
import { itemData, zoneData } from '../../../data/demo_data';
import { FilterLayout, FilterOption, FilterOptions, HiddenFilter, HiddenLayout, HiddenOption } from './style';

const OrderArr = ['기본 순', '인기 순', '최근 본 가게'];

const LocationFilter = () => {
  const [zoneVisible, onZoneVisible] = useState(false);
  const [itemVisible, onItemVisible] = useState(false);
  const [orderVisible, onOrderVisible] = useState(false);

  const setZoneVisible = useCallback(() => {
    onZoneVisible((prev) => !prev);
    onItemVisible(false);
    onOrderVisible(false);
  }, []);
  const setItemVisible = useCallback(() => {
    onZoneVisible(false);
    onItemVisible((prev) => !prev);
    onOrderVisible(false);
  }, []);
  const setOrderVisible = useCallback(() => {
    onZoneVisible(false);
    onItemVisible(false);
    onOrderVisible((prev) => !prev);
  }, []);
  return (
    <FilterLayout>
      <FilterOptions>
        <FilterOption>
          <Button block type="link" onClick={setZoneVisible}>모든 지역<BiCaretDown /></Button>
        </FilterOption>
        <FilterOption>
          <Button block type="link" onClick={setItemVisible}>모든 품목<BiCaretDown /></Button>
        </FilterOption>
        <FilterOption>
          <Button block type="link" onClick={setOrderVisible}>기본 순<BiCaretDown /></Button>
        </FilterOption>
      </FilterOptions>
      <HiddenFilter>
        {
          zoneVisible && 
          <HiddenLayout>
            {zoneData.map((v) => {
              if (v.locations.length > 1) {
                return (
                  <HiddenOption>
                    <Accordion
                      title={v.label}
                      list={v.locations}
                      dataIndex="label"
                    />
                  </HiddenOption>
                );
              } 
            return <HiddenOption><Button type="link">{v.label}</Button></HiddenOption>
            })}
          </HiddenLayout>
        }
        {
          itemVisible && 
          <HiddenLayout>
            {itemData.map((v) => <HiddenOption><Button type="link">{v.label}</Button></HiddenOption>)}
          </HiddenLayout>
        }
        {
          orderVisible &&
          <HiddenLayout>
            {OrderArr.map((v) => <HiddenOption><Button type="link">{v}</Button></HiddenOption>)}
          </HiddenLayout>
        }
      </HiddenFilter>
    </FilterLayout>
  );
}

export default LocationFilter;