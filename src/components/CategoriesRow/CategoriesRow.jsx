import { Categories } from '../../constants/categories';
import { CategoryCard } from './CategoryCard';

const popSould = new Audio('https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-84577/zapsplat_cartoon_pop_mouth_mid_pitch_001_86611.mp3');

export function CategoriesRow() {
  const pop = () => popSould.cloneNode(true).play();

  return (
    <div style={{ margin: 'auto', display: 'flex' }}>
      {Categories.map((category) => <CategoryCard key={category} pop={pop} category={category} />)}
    </div>
  );
}
