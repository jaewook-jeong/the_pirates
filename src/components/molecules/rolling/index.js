import React, { useEffect, useState } from 'react';
import { GreenSpan, RollingButton, RollingData, RollingHidden, RollingLayout, WhiteSpan } from './style';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const Rolling = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [unfold, setUnfold] = useState(false);

  useEffect(() => {
    const rollingData = setInterval(() => {
      setIndex(index => {
        return data.length - 1 === index ? 0 : index + 1
      });
    }, 1000);
    return () => clearInterval(rollingData);
  }, [data]);
  
  return (
    <RollingLayout>
        <RollingData>
          <WhiteSpan>{data[index].label}</WhiteSpan>
          <GreenSpan>{data[index].price}</GreenSpan>
          <WhiteSpan>{data[index].comment}</WhiteSpan>
        </RollingData>
        <RollingButton onClick={() => setUnfold(prev => !prev)}>
          {
            unfold ? <AiOutlineUp/> : <AiOutlineDown/>
          }
        </RollingButton>
      {
        unfold &&
        <RollingHidden>
          {
            data.map((v, i) => 
            <RollingData key={i}>
              <WhiteSpan>{v.label}</WhiteSpan>
              <GreenSpan>{v.price}</GreenSpan>
              <WhiteSpan>{v.comment}</WhiteSpan>
            </RollingData>
            )
          }
        </RollingHidden>
      }
    </RollingLayout>
  );
};

export default Rolling;