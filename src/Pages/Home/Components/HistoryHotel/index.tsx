import { historyHotel } from '../../mapped';
import * as S from './styles';

export const HistoryHotel: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        {historyHotel.map((value) => (
          <>
            <h2>{value.title}</h2>
            <p>{value.text}</p>
          </>
        ))}
      </S.Container>
    </S.Wrapper>
  );
};
