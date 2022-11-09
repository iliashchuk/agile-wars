import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Base } from './styled';

import { ReactComponent as SVGBugIcon } from './bug-svgrepo-com.svg';

export const BugIcon = styled(SVGBugIcon)`
    height: ${({ size }) => size}px;

    & path {
        fill: ${({ color }) => color};
        cursor: pointer;
        transform: rotate(${({ rotation }) => rotation}deg);
        transform-origin: 50% 50%;
    }


    &:hover path {
        fill: 'inherit';
    }
`;

export function Bug({ onClick, color }) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => setRotation(Math.random() * 360), []);

  return <Base onClick={onClick}><BugIcon color={color} rotation={rotation} size={40} /></Base>;
}
