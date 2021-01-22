import styled from 'styled-components';
import { ifProp } from 'styled-tools';

export const Wrapper = styled.div`
background-color: #f1f2f3;
position: relative;
margin: 0 auto;
min-width: 360px;
height: 100%;
max-width: 420px;
`;

export const StoreContainer = styled.div`
margin: 0!important;
top: 0;
z-index: 20;
min-height: 100%;
`;

export const ColGroup = styled.div`
position: relative;
margin: 0 auto;
width: 100%;
`;

export const Content = styled.div`
top: 0!important;
left: 0;
margin: 0;
height: auto;
display: block;
min-height: 1%;
`;

export const HeadLayout = styled.div`
position: relative;
display: block;
min-height: 1%;
`;

export const StoreInformation = styled.div`
display: block;
min-height: 1%;
margin: 0;
padding: 0;
outline-style: none;
outline-offset: 0;
-webkit-tap-highlight-color: transparent;
`;

export const FixedHeader = styled.div`
z-index: 4;
position: sticky;
top: 0;
overflow: hidden;
max-width: 420px;
width: 100%;
background-color: #fff;
height: 50px;
border-bottom: 1px solid #ddd;
display: block;
min-height: 1%;
&:after {
  display: block;
  visibility: hidden;
  clear: both;
  height: 0;
  content: '.';
  font-size: 0;
  line-height: 0;
}
`;

export const ImageHeartTag = styled.div`
position: relative;
min-height: 50px;
overflow: hidden;
display: block;
&:after {
  display: block;
  visibility: hidden;
  clear: both;
  height: 0;
  content: '.';
  font-size: 0;
  line-height: 0;
}
`;

export const ImgBlock = styled.div`
position: relative;
overflow: hidden;
user-select: none;
img {
  float: left;
  max-width: 100%;
  min-width: 100%;
  width: 100%;
  border: 0 none;
}
`;

export const Favorite = styled.span`
cursor: pointer;
position: absolute;
right: 15px;
bottom: 10px;
background-image: url(https://www.tpirates.com/assets/img/bul_favorite.svg);
width: 22px;
height: 22px;
background-size: 14px 12px;
background-color: rgba(0,0,0,0.5);
background-position: 50%;
border-radius: 3px;
z-index: 2;
display: inline-block !important;
overflow: hidden;
background-color: transparent;
background-repeat: no-repeat;
vertical-align: top;
text-indent: -99999px !important;
font-size: 0px !important;
line-height: 0px !important;
user-select: none;
`;

export const Tag = styled.div`
height: 22px;
position: absolute;
bottom: 10px;
overflow: hidden;
user-select: none;
padding: 0;
outline-style: none;
outline-offset: 0;
-webkit-tap-highlight-color: transparent;
ul {
  font-size: 12px !important;
  letter-spacing: -0.6px !important;
  line-height: 18px !important;
  list-style: none;
  margin: 0;
  li {
    box-sizing: border-box;
    float: left;
    white-space: nowrap;
    padding: 2px 5px;
    text-align: center;
    color: #ffffff;
    border-width: 0;
    border-radius: 3px;
    cursor: pointer;
    background-color: ${ifProp('status', '#1c79bc','#DE2222')}
  }
}
`;

export const DetailInfo = styled.div`
background-color: #1c79bc;
padding: 15px;
display: block;
min-height: 1%;
font-weight: 400;
ul {
  color: #fff;
  padding: 0px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -.7px;
  list-style-position: outside;
  list-style: none;
  li {
    padding-left: 35px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 20px;
  }
}
`;

export const AddressLi = styled.li`
background-image: url(https://www.tpirates.com/static/media/bul_address.e740b352.svg);
`;

export const TimeLi = styled.li`
background-image: url(https://www.tpirates.com/static/media/bul_clock.965c3da4.svg);
margin-top: 10px;
ul {
  list-style: none;
  padding: 0px;
  li {
    padding: 0px;
  }
  li+ li {
    margin-top: 5px;
  }
}
`;

export const ContactLi = styled.li`
background-image: url(https://www.tpirates.com/static/media/bul_phone.b28105f4.svg);
margin-top: 10px;
height: 39px;
ul {
  list-style: none;
  padding: 0px;
  li {
    padding: 0px;
    float: left;
    margin-right: 5px;
    margin-bottom: 5px;
    max-width: 100%;
    overflow: hidden;
    a {
      width: 100%;
      box-sizing: border-box;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      background-color: #fff;
      color: #1c79bc;
      padding: 5px 10px;
      border-radius: 3px;
      font-weight: 500;
      text-decoration: none;
    }
  }
}

`;

export const DeliveryLi = styled.li`
clear: both;
background-image: url(https://www.tpirates.com/static/media/bul_delivery.ede951b0.svg);
margin-top: 10px;
ul {
  user-select: none;
  list-style: none;
  padding: 0px;
  li {
    position: relative;
    padding-left: 100px;
    span {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  li+ li{
    margin-top: 5px;
  }
}
`;

export const HeadLine = styled.div`
box-sizing: border-box;
margin: 0;
padding: 10px 80px 11px 40px;
outline-style: none;
outline-offset: 0;
-webkit-tap-highlight-color: transparent;
  a {
    position: absolute;
    top: 10px;
    left: 8px;
    height: 10px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    cursor: pointer;
    span {
      padding: 7px;
      width: 15px;
      height: 15px;
      background-size: 15px;
      background-image: url(https://www.tpirates.com/static/media/bul_back.3bf9ebfc.svg);
      background-repeat: no-repeat;
      background-position: 50%;
      text-decoration: none;
      cursor: pointer;
      display: inline-block !important;
      overflow: hidden;
      background-color: transparent;
      background-repeat: no-repeat;
      vertical-align: top;
      text-indent: -99999px !important;
      font-size: 0px !important;
      line-height: 0px !important;
    }
  }
`;

export const TitleSpan = styled.span`
color: #555;
font-size: 16px;
line-height: 29px;
letter-spacing: -.8px;
font-weight: 500;
display: block;
overflow: hidden !important;
white-space: nowrap !important;
text-overflow: ellipsis !important;
`;

export const ViewSpan = styled.span`
position: absolute;
top: 10px;
right: 15px;
padding-left: 20px;
color: #999;
font-size: 13px;
line-height: 29px;
letter-spacing: -.65px;
background-image: url(https://www.tpirates.com/static/media/bul_view.b0cb34f7.svg);
background-repeat: no-repeat;
background-position: 0 50%;
background-size: 20px;
max-width: 60px;
`;

export const InfoTabWrapper = styled.div`
user-select: none;
margin: 0;
padding: 0;
outline-style: none;
outline-offset: 0;
-webkit-tap-highlight-color: transparent;
`;

export const FixedTab = styled.div`
position: ${ifProp('status', 'fixed','static')};
top: 50px;
max-width: 420px;
margin-top: ${ifProp('status','0px', '10px')};
z-index: 10;
width: 100%;
ul {
  display: table;
  width: 100%;
  padding: 0px;
  margin: 0px;
  color: #777777;
  font-size: 14px;
  letter-spacing: -0.7px;
  list-style: none;
}
`;

export const TabButton = styled.a`
display: table-cell;
white-space: nowrap;
overflow: hidden;
text-align: center;
width: 25%;
background-color: ${ifProp('status', '#fff', '#eee')};
text-decoration: none;
cursor: pointer;
li {
  border-left: 0;
  height: 40px;
  line-height: 40px;
  color: inherit;
  font-weight: inherit;
  border: 1px #dddddd solid;
}
`;

export const MainLayout = styled.div`
position: relative;
display: block;
min-height: 200vh;
margin-top: 10px;
`;