import * as S from './styles';
import { HistoryHotel } from './Components/HistoryHotel';
import { InfoHotel } from './Components/InfoHotel';

export const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <HistoryHotel />
        <InfoHotel />
      </S.Container>
    </S.Wrapper>
  );
};
