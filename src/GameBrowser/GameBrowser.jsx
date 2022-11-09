import { Link } from 'react-router-dom';
import { Wrapper } from './styled';

export function GameBrowser() {
  return (
    <Wrapper>
      <h1>Agile Wars</h1>
      <Link to="/game"><button type="button">Start a new game</button></Link>
    </Wrapper>
  );
}
