import React, { useMemo } from 'react';
import { BuisinessStatus, CardData, CardImg, CardLayout, CommentSapn, DescriptionSpan, DescriptionTag, ImgBlock, InfoData, InfoSummary, MarketSapn, StarSpan, SummarySpan, TagDiv, WhereSpan, LinkDefault } from './style';
import { BsFillStarFill } from 'react-icons/bs';
// import { Link } from 'react-router-dom';


const StoreCard = ({data}) => {
  const isOpen = useMemo(() => data.state === 'OPEN' ,[data]);
  return (
    <LinkDefault to={`${data.uri}`}>
    <CardLayout>
      <CardData>
        <InfoData>
          <WhereSpan status={isOpen}>
            {data.label}
            <MarketSapn>
              {data.market}
            </MarketSapn>
          </WhereSpan>
          <DescriptionSpan>
            {data.description}
          </DescriptionSpan>
          <DescriptionTag>
            <ul>
              {
                data.tags.includes('day-delivery') &&
                <li>당일배송</li>
              }
              {
                data.tags.includes('quick-delivery') &&
                <li>퀵배송</li>
              }
            </ul>
          </DescriptionTag>
        </InfoData>
        <InfoSummary>
          <BuisinessStatus status={isOpen}>
            {
              data.state === 'OPEN' ? "영업중" : "영업종료"
            }
          </BuisinessStatus>
          <SummarySpan>
            <StarSpan status={isOpen}><BsFillStarFill />{data.summary?.rating}</StarSpan>
            <CommentSapn>{data.summary?.comments}</CommentSapn>
          </SummarySpan>
        </InfoSummary>
      </CardData>
      <CardImg>
        <ImgBlock status={!isOpen}>
          <img  src={data.thumbnail} alt={`${data.label}`} />
        </ImgBlock>
        <TagDiv today={data.tags.includes('today-price')} status={isOpen}>
            <ul>
              <li>
                {
                  data.tags.includes('today-price') ? "오늘시세" : "전일시세"
                }
              </li>
            </ul>
        </TagDiv>
      </CardImg>
    </CardLayout>
    </LinkDefault>
  );
};

export default StoreCard;