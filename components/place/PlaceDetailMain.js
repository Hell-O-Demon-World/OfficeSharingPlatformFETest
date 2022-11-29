import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { officeSliceActions } from '../../store/officeList';
import OfficeSearch from '../main/officeList/OfficeSearch';
import PlaceAdditional from './PlaceAdditional';
import PlaceAvailableItem from './PlaceAvailableItem';
import PlaceImage from './PlaceImage';
import PlaceInfo from './PlaceInfo';
import PlaceOpeningHours from './PlaceOpeningHours';

const Wrapper = styled.section`
  position: relative;
  top: 90px;
  height: 80vh;
  width: 25%;
  overflow-y: scroll;

  & .prev-btn {
    z-index: 10;
    position: relative;
    width: 36px;
    height: 36px;
    top: 5px;
    left: 5px;
    cursor: pointer;
  }
  & .detail-btn {
    position: fixed;
    bottom: 0px;
    width: 25%;
    height: 40px;
    cursor: pointer;
    text-align: center;
    line-height: 40px;
    background: #111;
    color: #fff;
  }
 
  & .line {
    height: 6px;
    background #999;
  }
  @media screen and (max-width: 1170px) {
    width: 100%;
    height: 250px;
    &::-webkit-scrollbar {
      display: none;
    }
    & .detail-btn {
      width: 100%;
    }
  }
`;
const PlaceDetailMain = () => {
  const dispatch = useDispatch();
  const prevBtnHandler = () => {
    dispatch(officeSliceActions.selectPlace(null));
  };
  return (
    <Wrapper>
      <div className="prev-btn" onClick={prevBtnHandler}>
        <Image src="/svg/arrow-left.svg" width="36" height="36" />
      </div>
      <OfficeSearch />
      <PlaceImage />
      <div className="line"></div>
      <PlaceInfo />
      <PlaceAdditional />
      <PlaceOpeningHours />
      <PlaceAvailableItem />
      <div className="detail-btn">자세히 보기</div>
    </Wrapper>
  );
};

export default PlaceDetailMain;
