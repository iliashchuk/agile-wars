export const Tasks = [
  {
    category: 'ui', requiredCategories: { data: 1, logic: 1, ui: 1 }, cost: 5, name: 'Awesome Landing Page', bugs: ['ui', 'ui'],
  },
  {
    category: 'logic', requiredCategories: { infra: 1, data: 1 }, cost: 4, name: 'Authentification', bugs: ['logic', 'logic'],
  },
  {
    category: 'data', requiredCategories: { infra: 1 }, cost: 2, name: 'Database Setup', bugs: ['data', 'data', 'data'],
  },
  {
    category: 'logic', requiredCategories: { data: 1 }, cost: 2, name: 'Common Flow', bugs: ['logic', 'ui'],
  },
  {
    category: 'logic', requiredCategories: { data: 1, infra: 1 }, cost: 3, name: 'Complex flow', bugs: ['ui', 'ui', 'logic', 'data'],
  },
  {
    category: 'ui', requiredCategories: { data: 1, logic: 2, ui: 1 }, cost: 6, name: 'Multi-step form', bugs: ['ui', 'ui', 'logic'],
  },
  {
    category: 'data', requiredCategories: { data: 1, infra: 1 }, cost: 3, name: 'Migration', bugs: ['data', 'logic'],
  },
  {
    category: 'ui', requiredCategories: {}, cost: 1, name: 'Submit Button', bugs: ['ui'],
  },
  {
    category: 'data', requiredCategories: {}, cost: 1, name: 'Small Dataset', bugs: ['data'],
  },
  {
    category: 'infra', requiredCategories: {}, cost: 1, name: 'Build Pipeline', bugs: ['infra'],
  },
  {
    category: 'logic', requiredCategories: {}, cost: 1, name: 'Simple Formula', bugs: ['logic'],
  },
  {
    category: 'logic', requiredCategories: {}, cost: 2, name: 'Navigation', bugs: ['ui', 'logic'],
  },
  {
    category: 'ui', requiredCategories: {}, cost: 2, name: 'Input Field', bugs: ['ui', 'ui'],
  },
  {
    category: 'data', requiredCategories: {}, cost: 1, name: 'Simple Schemas', bugs: ['data'],
  },
  {
    category: 'infra', requiredCategories: {}, cost: 1, name: 'Folder Aliases', bugs: ['logic'],
  },
];
