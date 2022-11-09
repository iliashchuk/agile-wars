import styled from 'styled-components';

import { CardBase, CardHeader } from '../common';

export const Base = styled(CardBase)`
    margin: 5px;
`;

export const Header = styled(CardHeader)`
    justify-content: center;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5;
`;

export const Body = styled.div`
    fill: inherit;
    width: 200px;
    height: 200px;
    padding: 12px;
`;
