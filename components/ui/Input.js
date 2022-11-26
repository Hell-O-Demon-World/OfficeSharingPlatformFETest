import React from 'react';
import styled from 'styled-components';
const StyledInput = styled.input`
  width: 80%;
  height: 40px;
  margin: 10px auto;

  &.invalid {
    border-color: red;
    background: #fbdada;
  }
  &.invalid:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }
`;
const Input = (props) => {
  return (
    <StyledInput
      type={props.type || ''}
      name={props.name || ''}
      placeholder={props.placeholder || ''}
      className={props.className}
      onChange={props.onChange || ''}
      onBlur={props.onBlur || ''}
      required={props.required || null}
      minLength={props.minLength || null}
      maxLength={props.maxLength || null}
    />
  );
};

export default Input;