import axios from 'axios';
import { useSession } from 'next-auth/react';
import React from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from './Button';

const Content = styled.textarea`
  &::-webkit-scrollbar {
    width: 0px;
  }
  width: 100%;
  height: 60px;
  padding: 15px;
  border-radius: 5px;
  outline: none;
  resize: none;
  margin-top: 10px;
  font-size: 1rem;
  border: 1px solid #111;
  max-height: 330px;
`;
const TextArea = ({ placeholder, addCommentHandler }) => {
  const changeHeightHandler = (e) => {
    e.target.style.height = `63px`;
    let scHeight = e.target.scrollHeight;
    e.target.style.height = `${scHeight}px`;
  };

  return (
    <Fragment>
      <Content
        placeholder={placeholder || '입력 200자 이내'}
        onKeyUp={changeHeightHandler}
      ></Content>
      <Button onClick={addCommentHandler}>등록</Button>
    </Fragment>
  );
};

export default TextArea;
