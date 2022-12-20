import * as S from './styles';
import Apartamento from '../../assets/images/apartamento.jpg';
import Restaurante from '../../assets/images/restaurante.jpg';
import Piscina from '../../assets/images/piscina.jpg';

export const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.HistoryHotel>
          <h2>Lorem Ipsum is simply dummydummy dummy</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </S.HistoryHotel>
        <S.InfoHotel>
          <li>
            <img src={Apartamento} width="150" alt="Apartamento" />

            <a href="">
              <h3>Apartamento</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </a>
          </li>
          <li>
            <img src={Restaurante} width="150" alt="Restaurante" />

            <a href="">
              <h3>Restaurante</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </a>
          </li>

          <li>
            <img src={Piscina} width="150" alt="Piscina" />

            <a href="">
              <h3>Piscina</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </a>
          </li>
        </S.InfoHotel>
      </S.Container>
    </S.Wrapper>
  );
};
