import styled, { css, keyframes } from 'styled-components';

import { CategoryColors } from '../../constants/categories';
import { CardHeader, CardBase, CardFooter } from '../common';

const shake = keyframes`
  0% {transform: rotate(0deg);}
  33%  {transform: rotate(8deg)}
  66%  {transform: rotate(-8deg)}
  100% {transform: rotate(0deg)}
`;

export const HandWrapper = styled.div`
  width: fit-content;
  transform: rotate(${({ angle }) => angle}deg) translateY(-${({ YoffsetInHand }) => YoffsetInHand || 0}px);
  transform-origin: ${({ XTransofrmOffsetInHand }) => XTransofrmOffsetInHand}% 0%;
  transition: transform 0.5s;
  z-index: ${({ zIndex }) => zIndex};
`;

export const Base = styled(CardBase)`
  width: 120px;
  background: white;
  cursor: pointer;
  height: 144px;
  display: flex;
  flex-direction: column;
  position: relative;

  transform-origin: 50% 50%;
  animation: ${({ shakeActive }) => (shakeActive ? shake : '')} 0.6s;

  ${({ backside }) => (backside ? css`&:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    height: calc(100% - 8px);
    width: calc(100% - 8px);
    border-radius: 8px;
    border: 2px dashed black;
  }` : '')};
`;

export const Header = styled(CardHeader)`
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  gap: 4px;
  height: 36px;
  box-sizing: border-box;
`;

export const Cost = styled.h4`
  color: inherit;
  white-space: nowrap;
  margin: 0;
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const Indicator = styled.div`
  background-color: ${({ category }) => CategoryColors[category]};
  color: ${({ category }) => CategoryColors[category]};
  border-radius: 4px;
  width: 16px;
  height: 8px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 72px;
  font-size: 14px;
  font-weight: 700;
  padding: 4px;
`;

export const Footer = styled(CardFooter)`
  align-items: center;
  justify-content: space-evenly;
  height: 36px;
`;

export const BacksideText = styled.div`
  margin: auto;
  font-size: 24px;
  font-weight: 700;
  transform: rotate(50deg);
`;
