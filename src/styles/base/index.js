import { createGlobalStyle } from 'styled-components'
import { center } from '../../styles/tools';

const Base = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }

  .container {
    max-width: 1280px;
    ${center};
  }

  .grid {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    padding: var(--spacing-small);
  }
`

export default Base;
