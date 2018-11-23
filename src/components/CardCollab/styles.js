import styled from 'styled-components'

import { center } from '../../styles/tools';

const Card = styled.article `
  background-color: var(--primary-color);
  color: var(--zero-color);
  ${center};
  max-width: 370px;
  width: 100%;
  padding: 58px 56px 40px;
  text-align: center;
`;

export default Card;
