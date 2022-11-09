import {
  createContext, useContext, useState, useMemo,
} from 'react';
import uuid4 from 'uuid4';

import { Categories } from '../constants/categories';

const CategoryContext = createContext({
  categoriesBugs: {},
  addBugs: () => {},
  removeBugFromCategory: () => {},
});

function CategoryContextProvider({ children }) {
  const [categoriesBugs, setCategoriesBugs] = useState(
    Object.fromEntries(Categories.map((category) => [category, []])),
  );

  const addBugs = (categories) => {
    const newCategoriesBugs = { ...categoriesBugs };

    for (const category of categories) {
      newCategoriesBugs[category] = [...newCategoriesBugs[category], uuid4()];
    }

    setCategoriesBugs(newCategoriesBugs);
  };

  const removeBugFromCategory = (category, id) => {
    setCategoriesBugs(
      { ...categoriesBugs, [category]: categoriesBugs[category].filter((bugId) => bugId !== id) },
    );
  };

  const memoizedContext = useMemo(
    () => ({ categoriesBugs, addBugs, removeBugFromCategory }),
    [categoriesBugs, addBugs, removeBugFromCategory],
  );

  return (
    <CategoryContext.Provider
      value={memoizedContext}
    >
      {children}
    </CategoryContext.Provider>
  );
}

const useCategories = () => useContext(CategoryContext);

export { CategoryContextProvider, useCategories };
