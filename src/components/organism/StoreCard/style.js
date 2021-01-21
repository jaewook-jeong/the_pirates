import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const LinkDefault = styled(Link)`
text-decoration: none;
`;

export const CardLayout = styled.div`
position: relative;
font-weight: 400;
height: 130px;
margin: 5px 0;
background-color: #fff;
border-width: 1px 0;
text-decoration: none;
cursor: pointer;
display: block;
box-sizing: border-box;
overflow: hidden;
position: relative;
border-color: #dddddd;
border-style: solid;
padding: 0;
`;

export const CardData = styled.div`
box-sizing: border-box;
position: relative;
margin-left: 130px;
padding-top: 15px;
padding-right: 15px;
padding-left: 15px;
height: inherit;
display: block;
grid-template-columns: 78% auto;
padding: 10px 15px;
`;

export const InfoData = styled.div`
margin: 0;
text-decoration: none;
cursor: pointer;
`;

export const WhereSpan = styled.span`
color: #555555;
font-size: 14px;
line-height: 20px;
letter-spacing: -0.7px;
font-weight: 500;
text-decoration: none;
cursor: pointer;
display: block;
overflow: hidden !important;
white-space: nowrap !important;
text-overflow: ellipsis;
${props => {
  if (!props.status) {
    return (
      css`
      color: #a0a0ac !important;
      `
    )
  }
}}
`;

export const MarketSapn = styled.span`
margin-left: 5px;
color: #777777;
font-size: 13px;
line-height: 19px;
letter-spacing: -0.65px;
text-decoration: none;
cursor: pointer;
${props => {
  if (!props.status) {
    return (
      css`
      color: #a0a0ac !important;
      `
    )
  }
}}
`;

export const DescriptionSpan = styled.span`
display: block;
margin-top: 1px;
min-height: 20px;
width: 100%;
color: #999999;
font-size: 13px;
line-height: 19px;
letter-spacing: -0.65px;
overflow: hidden !important;
white-space: nowrap !important;
text-overflow: ellipsis
`;

export const DescriptionTag = styled.span`
display: block;
margin-top: 1px;
min-height: 20px;
width: 100%;
color: #999999;
font-size: 13px;
line-height: 19px;
letter-spacing: -0.65px;
text-decoration: none;
cursor: pointer;
ul {
  text-decoration: none;
  cursor: pointer;
  font-size: 12px !important;
  letter-spacing: -0.6px !important;
  line-height: 18px !important;
  list-style-position: outside;
  margin: 0;
  padding: 0;
  outline-style: none;
  outline-offset: 0;
  -webkit-tap-highlight-color: transparent;
  li {
    font-size: .9em!important;
    padding: 0 5px 1px;
    background-color: #48B130;
    ox-sizing: border-box;
    float: left;
    white-space: nowrap;
    text-align: center;
    color: #ffffff;
    border-width: 0;
    border-radius: 3px;
    cursor: pointer;
  }
}
`;

export const InfoSummary = styled.div`
width: inherit;
height: 20px;
left: 15px;
top: inherit;
bottom: 15px;
position: absolute;
right: 15px;
`;

export const BuisinessStatus = styled.span`
top: 0;
right: 0;
display: block;
position: absolute;
text-align: right;
color: ${ifProp('status','#1c79bc', '#a0a0ac')};
font-size: 13px;
line-height: 19px;
letter-spacing: -0.65px;
`;

export const SummarySpan = styled.span`
display: flex;
top: 0;
left: 0;
right: inherit;
position: absolute;
bottom: 0;
`;

export const StarSpan = styled.span`
color: #ff9300;
font-size: 13px;
line-height: 19px;
letter-spacing: -0.65px;
${props => {
  if (!props.status) {
    return (
      css`
      color: #a0a0ac !important;
      `
    )
  }
}}
`;

export const CommentSapn = styled.span`
margin-left: 8px;
background-image: url(https://www.tpirates.com/assets/img/bul_comment.svg);
background-repeat: no-repeat;
background-position: 0 60%;
padding-left: 15px;
color: #999999;
font-size: 13px;
line-height: 19px;
letter-spacing: -0.65px;
`;

export const CardImg = styled.div`
width: 130px;
height: 130px;
position: absolute;
top: 0;
left: 0;
display: block;
min-height: 1%;
`;

export const ImgBlock = styled.span`
float: left;
min-width: 100%;
position: relative;
overflow: hidden;
img {
  float: left;
  max-width: 100%;
  min-width: 100%;
  width: 100%;
  -webkit-filter: ${ifProp('status', 'grayscale(100%)')};
}
`;

export const TagDiv = styled.div`
margin: 0 10px 0 5px;
height: 22px;
position: absolute;
bottom: 10px;
overflow: hidden;
ul {
  font-size: 12px !important;
  letter-spacing: -0.6px !important;
  line-height: 18px !important;
  list-style-position: outside;
  list-style: none;
  margin: 0;
  padding: 0;
  outline-style: none;
  outline-offset: 0;
  -webkit-tap-highlight-color: transparent;
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
    text-decoration: none;
    font-size: 12px !important;
    letter-spacing: -0.6px !important;
    line-height: 18px !important;
    background-color: ${ifProp('today', '#1C79BC', '#DE2222')};
    ${props => {
      if (!props.status) {
        return (
          css`background: rgba(0,0,0,0.5) !important;
              z-index: 2;
              color: #a0a0ac !important;
              `
        )
      }
    }}
  }
}
`;