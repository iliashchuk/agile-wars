import styled from 'styled-components';

export const Base = styled.div`
  position: fixed;
  right: 16px;
  bottom: 16px;
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-top: 0;
  }

  & > div {
    margin-top: -112px;
  }
`;
