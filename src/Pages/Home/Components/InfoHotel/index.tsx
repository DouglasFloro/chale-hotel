import * as S from './styles';
import Apartamento from '../../../../assets/images/apartamento.jpg';
import Restaurante from '../../../../assets/images/restaurante.jpg';
import Piscina from '../../../../assets/images/piscina.jpg';
import { infoHotel } from '../../mapped';

export const InfoHotel: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        {infoHotel.map((value) => (
          <li>
            <>
              <img src={value.image} />
              <a href="">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </a>
            </>
          </li>
        ))}
      </S.Container>
    </S.Wrapper>
  );
};
