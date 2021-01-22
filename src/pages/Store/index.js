import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { storeData } from '../../data/demo_data';
import { AddressLi, ColGroup, Content, DetailInfo, Favorite, FixedHeader, HeadLayout, HeadLine, ImageHeartTag, ImgBlock, InfoTabWrapper, MainLayout, StoreContainer, StoreInformation, Tag, TitleSpan, ViewSpan, Wrapper, TimeLi, DeliveryLi, ContactLi, FixedTab, TabButton } from './style';


const Store = (props) => {
  const history = useHistory();
  const [info, setInfo] = useState({});
  const [sticky, setSticky] = useState(false);
  const [tabKey, setTabKey] = useState(0);

  useEffect(() => {
    // 마치 페이지 로딩 후 데이터를 가져오는 것처럼 보이게
    const data = storeData.filter((v) => v.uri === props.match.url)[0];
    setInfo(data);
  }, []);
  useEffect(() => {
    function onScroll() {
      const st = window.pageYOffset;
      const targetDiv = document.getElementById('infotab');
      if (targetDiv.offsetHeight < st) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <Wrapper>
      <FixedHeader>
        <HeadLine>
          <a onClick={() => history.goBack()} href="#" >
            <span>뒤로가기</span>
          </a>
          <TitleSpan>{info.label} {info.market}</TitleSpan>
          <ViewSpan>{(Math.random() * 10).toFixed(1)}만</ViewSpan>
        </HeadLine>
      </FixedHeader>
      <StoreContainer>
        <ColGroup>
          <Content>
            <HeadLayout>
              <StoreInformation  id="infotab">
                <ImageHeartTag>
                  <ImgBlock>
                    <img src={info.thumbnail} alt={info.label} />
                  </ImgBlock>
                  <Favorite />
                  <Tag status={info?.tags?.includes('today-price')? true : false}>
                    <ul>
                      <li>
                        {
                          info?.tags?.includes('today-price')? '오늘시세':'전일시세'
                        }
                      </li>
                    </ul>
                  </Tag>
                </ImageHeartTag>
                <DetailInfo>
                  <ul>
                    <AddressLi>
                      <p>서울 영등포구 선유로 146, 614호</p>
                    </AddressLi>
                    <TimeLi>
                      <ul>
                        <li>월요일: 09:00 ~ 21:00</li>
                        <li>화요일: 09:00 ~ 21:00</li>
                        <li>수요일: 09:00 ~ 21:00</li>
                        <li>목요일: 09:00 ~ 21:00</li>
                        <li>금요일: 09:00 ~ 21:00</li>
                        <li>토요일: 09:00 ~ 21:00</li>
                        <li>일요일: 09:00 ~ 21:00</li>
                      </ul>
                    </TimeLi>
                    <ContactLi>
                      <ul>
                        <li><a href="tel:010-0000-0000">010-0000-0000</a></li>
                        <li><a href="tel:02-2068-3241">02-2068-3241</a></li>
                      </ul>
                    </ContactLi>
                    <DeliveryLi>
                        <ul>
                          <li>
                            <span>퀵서비스</span>(전화문의)
                          </li>
                          <li>
                            <span>고속버스 화물</span>(전화문의)
                          </li>
                          <li>
                            <span>택배</span>(전화문의)
                          </li>
                        </ul>
                    </DeliveryLi>
                  </ul>
                </DetailInfo>
              </StoreInformation>
              <InfoTabWrapper>
                <FixedTab status={sticky}>
                  <ul>
                    <TabButton status={tabKey === 0} onClick={()=> setTabKey(0)}><li>가격정보</li></TabButton>
                    <TabButton status={tabKey === 1} onClick={()=> setTabKey(1)}><li>탐방기</li></TabButton>
                    <TabButton status={tabKey === 2} onClick={()=> setTabKey(2)}><li>리뷰 {Math.ceil(Math.random()*10000).toLocaleString()}</li></TabButton>
                    <TabButton status={tabKey === 3} onClick={()=> setTabKey(3)}><li>위치</li></TabButton>
                  </ul>
                </FixedTab>
              </InfoTabWrapper>
            </HeadLayout>
            <MainLayout>
              {
                tabKey === 0 ? '가격정보' : tabKey === 1 ? '탐방기' : tabKey === 2 ? '리뷰' : '위치'
              }
            </MainLayout>
          </Content>
        </ColGroup>
      </StoreContainer>
    </Wrapper>
  );
};

export default Store;