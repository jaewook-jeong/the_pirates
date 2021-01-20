import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ifProp, palette } from 'styled-tools';

export const BtnStyle = css`
  width: ${ifProp('block', '100%')};
  ${props => {
    switch (props.size) {
      case 'middle':
        return (
          css`
          height: 32px;
          padding: 4px 15px;
          font-size: 14px;
          border-radius: 2px;
          `
        );
      case 'large':
        return (
          css`
          height: 40px;
          padding: 6.4px 15px;
          font-size: 16px;
          border-radius: 2px;
          `
        );
      case 'small':
          return(
            css`
            height: 24px;
            padding: 0px 7px;
            font-size: 14px;
            border-radius: 2px;
            `
          );
      default:
        break;
    }
  }}
  background-color: ${ifProp('disabled', palette('grayscale', 3), props => {
    if (props.styletype === 'primary') {
      return '#1c79bc';
    } else {
      return '#fff';
    }
  }
  )};
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  pointer-events: ${ifProp('disabled', 'none', 'auto')};
  color: ${props => {
    if (props.styletype === 'primary') {
      return '#fff';
    } else {
      return '#1c79bc';
    }
  }};
  -webkit-user-drag: none;
  display: inline-block;
  border-color: ${props => {
    if (props.styletype === 'default') {
      return '#1c79bc';
    } else {
      return '#fff';
    }
  }};
  outline: none;
  text-align: center;
  user-select: none;
  transition: opacity ease 0.2s, background-color ease 0.2s, color ease 0.2s;
  border-style: solid;
  border-width: thin;
  line-height: 1.5715;
  position: relative;
  font-weight: 510;
  &:hover {
    opacity: 0.85;
    
  }
`;

export const StyledBtn = styled.button`
  ${BtnStyle}
`;

export const StyledLink = styled(Link)`
  ${BtnStyle}
`;