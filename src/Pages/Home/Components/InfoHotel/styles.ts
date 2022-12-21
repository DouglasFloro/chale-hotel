import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.ul`
  width: 100%;

  padding: 20px 0;

  img {
    width: 250px;
    height: 200px;
  }

  li {
    display: flex;
    padding-bottom: 25px;
  }

  a {
    display: flex;
    flex-direction: column;
  }

  h3,
  p {
    padding-left: 15px;
  }
`;
