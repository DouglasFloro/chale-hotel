import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 30px;

  width: 100%;
  max-width: 1140px;
`;

export const HistoryHotel = styled.div`
  width: 50%;

  padding: 15px 0;

  h2 {
    color: #7d7640;
    font-size: 1.1em;
    padding: 5px 0;
  }
  p {
    font-size: 1em;
    padding-bottom: 10px;
  }
`;

export const InfoHotel = styled.div`
  width: 50%;

  padding: 20px 0;

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
