import styled from 'styled-components';

export const FilterLayout = styled.div`
position: relative;
`;

export const FilterOptions = styled.div`
position: relative;
padding: 0;
margin: 0;
width: 100%;
display: flex;
`;

export const FilterOption = styled.div`
cursor: pointer;
text-align: center;
padding: 3px 2px;
flex: 1 1 33%;
`;

export const HiddenFilter = styled.div`
position: absolute;
top: 40px;
width: 100%;
z-index: 1;
`;

export const HiddenLayout = styled.div`
background-color: #fff;
`;

export const HiddenOption = styled.div`
width: 90%;
margin: 0 auto;
background-color: #fff;
text-align: center;
border-bottom: 1px solid #ddd;
padding: 5px 0px;
`;