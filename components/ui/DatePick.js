import React, { useRef } from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { reservationActions } from '../../store/reservation';
const DatePick = () => {
  const dispatch = useDispatch();
  const dateInputRef = useRef();
  const [selectDate, setSelectDate] = useState(new Date());
  const inputDate = () => {};
  return (
    <DatePicker
      selected={selectDate}
      onCalendarClose={inputDate}
      minDate={new Date()}
      dateFormat="yyyy-MM-dd"
      ref={dateInputRef}
      onChange={(date) => {
        setSelectDate((prevState) => (prevState = date));
        dispatch(reservationActions.selectDate(date.toLocaleDateString()));
      }}
    />
  );
};

export default DatePick;
