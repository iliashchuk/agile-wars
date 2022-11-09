import { CategoryNames } from '../../constants/categories';
import { useCategories } from '../../context/CategoryContext';

import { Bug } from '../Bug/Bug';

import { Base, Body, Header } from './styled';

export function CategoryCard({ category, pop }) {
  const { categoriesBugs, removeBugFromCategory } = useCategories();

  const removeBug = (idToRemove) => {
    pop();
    removeBugFromCategory(category, idToRemove);
  };

  return (
    <Base category={category}>
      <Header>{CategoryNames[category]}</Header>
      <Body>
        {categoriesBugs[category].map(
          (id) => <Bug onClick={() => removeBug(id)} key={id} />,
        )}
      </Body>
    </Base>
  );
}
