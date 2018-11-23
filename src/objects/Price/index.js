import styled from 'styled-components'

const Price = styled.h2 `
  font-size: 100px;
  font-weight: normal;
  margin-bottom: var(--spacing-small);

  & > small {
    color: rgba(255,255,255,0.5);
    display: block;
    font-size: 18px;
    font-weight: 400;
    margin-top: var(--spacing-small);
  }
`

export default Price;
