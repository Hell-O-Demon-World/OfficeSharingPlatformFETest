import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { authSliceActions } from '../../store/auth';
import Input from '../ui/Input';
const Wrapper = styled.div`
  &.control {
    width: 100%;
  }
`;
const Password = ({ signIn }) => {
  const [passwordBlur, setPasswordBlur] = useState(false);
  const [passwordSecondBlur, setPasswordSecondBlur] = useState(false);
  const [password, setPassword] = useState();
  const [checkPassword, setCheckPassword] = useState();

  const dispatch = useDispatch();
  const passwordIsValid = useSelector((state) => state.auth.passwordIsValid);
  const passwordSecondIsValid = useSelector(
    (state) => state.auth.passwordSecondIsValid
  );
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    dispatch(
      authSliceActions.getPasswordIsEqual(e.target.value === checkPassword)
    );
    dispatch(authSliceActions.getPasswordValid(e.target.value));
  };
  const validatePasswordHandler = (e) => {
    setPassword(e.target.value);
    dispatch(
      authSliceActions.getPasswordIsEqual(e.target.value === checkPassword)
    );
    dispatch(authSliceActions.getPasswordValid(e.target.value));
    setPasswordBlur(true);
  };
  const passwordSecondChangeHandler = (e) => {
    setCheckPassword(e.target.value);
    dispatch(authSliceActions.getPasswordIsEqual(password === e.target.value));
    dispatch(authSliceActions.getPasswordSecondValid(e.target.value));
    {
      !signIn
        ? dispatch(authSliceActions.getCheckedPassword(e.target.value))
        : '';
    }
  };
  const validatecheckedPasswordHandler = (e) => {
    setCheckPassword(e.target.value);
    setPasswordSecondBlur(true);
    dispatch(authSliceActions.getPasswordIsEqual(password === e.target.value));
    dispatch(authSliceActions.getPasswordSecondValid(e.target.value));
    {
      !signIn
        ? dispatch(authSliceActions.getCheckedPassword(e.target.value))
        : '';
    }
  };
  return (
    <Wrapper className="control">
      <div className="validity-comment">
        {!passwordIsValid &&
          passwordBlur &&
          '?????? ????????????/??????/???????????? ?????? 8~15??????'}
      </div>
      <label htmlFor="password">
        <Input
          type="password"
          name="password"
          placeholder="????????????*"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          className={`${passwordIsValid === false ? ' invalid' : ''}`}
          minLength="8"
          maxLength="15"
          required
        />
        {!signIn ? (
          <div className="validity-comment">
            {password !== checkPassword && passwordSecondBlur
              ? '??????????????? ????????????.'
              : ''}
          </div>
        ) : (
          ''
        )}
        {!signIn ? (
          <Input
            type="password"
            name="password"
            placeholder="???????????? ??????*"
            onChange={passwordSecondChangeHandler}
            onBlur={validatecheckedPasswordHandler}
            className={`${passwordSecondIsValid === false ? ' invalid' : ''}`}
            minLength="8"
            maxLength="15"
            required
          />
        ) : (
          ''
        )}
      </label>
    </Wrapper>
  );
};

export default Password;
