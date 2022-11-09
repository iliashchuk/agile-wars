import { useState } from 'react';
import { BugIcon } from '../Bug';

import { CategoryColors } from '../../constants/categories';
import {
  Base, Header, Indicator, IndicatorWrapper, Body, Cost, Footer, HandWrapper,
} from './styled';

export function Task({
  onClick, handProps, category, requiredCategories, cost, name, bugs,
}) {
  const [shake, setShake] = useState(false);

  const handleOnClick = () => {
    if (!onClick()) {
      setShake(true);
    }
  };

  const categories = Object.keys(requiredCategories).reduce(
    (acc, requiredCategory) => [
      ...acc,
      ...new Array(requiredCategory[requiredCategory]).fill(requiredCategory)],
    [],
  );

  return (
    <HandWrapper {...handProps}>
      <Base
        shakeActive={shake}
        onAnimationEnd={() => { setShake(false); }}
        onClick={handleOnClick}
        category={category}
      >
        <Header>
          <IndicatorWrapper>
            {categories.map(
              (requiredCategory) => (
                <Indicator
                  key={requiredCategory}
                  category={requiredCategory}
                />
              ),
            )}
          </IndicatorWrapper>
          <Cost>
            {cost}
            {' '}
            SP
          </Cost>
        </Header>
        <Body>
          {name}
        </Body>
        <Footer>
          {bugs.map(
            (bugCategory, index) => (
              <BugIcon
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                rotation={45}
                size={24}
                color={CategoryColors[bugCategory]}
              />
            ),
          )}
        </Footer>
      </Base>
    </HandWrapper>
  );
}
