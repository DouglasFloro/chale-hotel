import { historyHotel } from '../../mapped';
import * as S from './styles';

export const HistoryHotel: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        {historyHotel.map((value) => (
          <div key={value.id}>
            <h2>{value.title}</h2>
            <p>{value.text}</p>
          </div>
        ))}
      </S.Container>
    </S.Wrapper>
  );
};
