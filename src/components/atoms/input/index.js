import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { InputGroup, InputGroupWrapper, SearchBtn, SearchBtnWrapper, SearchInput } from './style';

const Input = ({
  inputName,
  disabled = false,
  defaultValue = '',
  placeholder = '',
  value,
  onChange,
  onClick,
}) => {
  return (
    <InputGroupWrapper>
      <InputGroup>
        <SearchInput
          name={inputName}
          value={value}
          disabled={disabled}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete="off"
        />
        <SearchBtnWrapper>
          <SearchBtn onClick={onClick}>
            <BiSearchAlt2 />
          </SearchBtn>
        </SearchBtnWrapper>
      </InputGroup>
    </InputGroupWrapper>
  );
}

export default React.memo(Input);