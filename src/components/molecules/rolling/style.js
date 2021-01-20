import styled from 'styled-components';

export const RollingLayout = styled.div`
position: relative;
font-size: 14px;
background-color: #313740;
font-weight: 500;
`;

// export const RollingLayout = styled.div`
// `;

export const RollingData = styled.div`
  padding: 10px 10px;

`;

export const WhiteSpan = styled.span`
color: #fff;
margin: 0px 3px;
`;

export const GreenSpan = styled.span`
color: #b1d784;
margin: 0px 3px;
`;

export const RollingButton = styled.div`
position: absolute;
right: 5px;
top: 8px;
color: #fff;
font-size: 20px;
cursor: pointer;
z-index: 2;
`;

export const RollingHidden = styled.div`
position: absolute;
top: 0px;
background-color: #313740;
width: 100%;
z-index: 1;
`;