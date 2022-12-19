import * as S from './styles';
import Depoimento from '../../../../assets/images/depoimento.png';

export const Header: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo>
          <h1>
            <a href="">Chalé Hotel</a>
          </h1>
        </S.Logo>
        <S.Main>
          <S.ContentMain>
            <S.MainLocations>
              <span>Rio de Janeiro - São Paulo - Belo Horizonte</span>
              <a href="">Reservar</a>
            </S.MainLocations>
            <S.SideBar>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">História</a>
              </li>
              <li>
                <a href="">Impresa</a>
              </li>
              <li>
                <a href="">Gastronomia</a>
              </li>
              <li>
                <a href="">Contato</a>
              </li>
              <S.ImageDep>
                <img src={Depoimento} />
              </S.ImageDep>
            </S.SideBar>
          </S.ContentMain>
        </S.Main>
      </S.Container>
    </S.Wrapper>
  );
};
