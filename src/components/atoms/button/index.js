import React from 'react';
import { StyledBtn, StyledLink } from './style';

const Button = (props) => {
  const {
    block = false,
    disabled = false,
    to,
    shape = 'default', // default, round
    size = 'middle',
    type = 'default', // default, primary, link
    onClick,
    children,
  } = props;

  if (to) {
    return (
      <StyledLink
        styletype={type}
        to={to}
        block={block}
        onClick={onClick}
        size={size}
        shape={shape}
        disabled={disabled}
      >
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledBtn
      styletype={type}
      block={block}
      onClick={onClick}
      size={size}
      shape={shape}
      disabled={disabled}
    >
      {children}
    </StyledBtn>
  );
};

export default Button;
