import styled from 'styled-components';

import { CategoryColors } from '../../constants/categories';

export const CardBase = styled.div`
    width: fit-content;
    border-radius: 8px;
    border: 2px solid;
    border-color: ${({ category }) => CategoryColors[category]};
    color: ${({ category }) => CategoryColors[category]};
    fill: ${({ category }) => CategoryColors[category]};
`;

export const CardHeader = styled.div`
    border-bottom: solid 2px;
    border-color: inherit;
    display: flex;
    color: inherit;
    fill: ${({ category }) => CategoryColors[category]};
`;

export const CardFooter = styled.div`
    border-top: solid 2px;
    border-color: inherit;
    display: flex;
    fill: ${({ category }) => CategoryColors[category]};
`;
