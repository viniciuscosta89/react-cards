import styled from 'styled-components';

const ButtonCollab = styled.a `
  background-color: var(--zero-color);
  border-radius: var(--radius);
  color: var(--primary-color);
  display: inline-block;
  font-size: 16px;
  padding: 8px 46px;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;

  ${props =>
    props.primary
      ? `
        &:hover {
          background-color: rgba(0,0,0,0.3);
          color: #fff;
          cursor: pointer;
        }
      `
      : `
        color: #838383;
        background-color: #ccc;
      `};
`;

export default ButtonCollab;
