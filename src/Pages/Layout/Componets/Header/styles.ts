import styled from 'styled-components';
import Fungologo from '../../../../assets/images/topo-imagem-principal.png';
import Imagemain from '../../../../assets/images/topo-imagem-lateral.png';
import Detailtop from '../../../../assets/images/logo.png';

export const Wrapper = styled.header`
  width: 100%;
  min-width: 1000px;
  max-width: 1180px;

  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  height: 15.4em;
  min-height: 250px;

  position: relative;

  margin: 15px;
  background: #dbcd87;
`;

export const Logo = styled.div`
  width: 100%;
  height: 250px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  background: url(${Fungologo}) no-repeat;

  a {
    width: 151px;
    height: 66px;

    position: absolute;
    top: 15px;
    left: 15px;
    z-index: 3;

    background: url(${Detailtop}) no-repeat;
    text-indent: -10000px;
  }
`;

export const Main = styled.div`
  width: 620px;
  height: 250px;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;

  background: url(${Imagemain}) no-repeat;
`;

export const ContentMain = styled.div`
  margin: 0 15px 0 90px;
  padding-top: 15px;
`;

export const MainLocations = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border-top: 1px solid #b5ab56;
  border-bottom: 1px solid #b5ab56;
  padding: 5px 0;
  font-size: 0.7em;
  color: #8b8448;
  a {
    margin-top: 5px;
    text-transform: uppercase;
    background: #a29750;
    color: #fff5b0;
    padding: 5px 10px;
  }
`;

export const SideBar = styled.ul`
  position: relative;
  margin-top: 10px;
  padding: 0;
  list-style: none;
  li {
    padding: 7px;

    a {
      text-transform: uppercase;
      font-size: 1em;
      padding: 5px;
      color: #6e672c;
    }
    a:hover {
      background: #fdf6be;
    }
  }
`;

export const ImageDep = styled.div`
  position: absolute;
  right: 60px;
  top: 3px;

  img {
    width: 226px;
    height: 164px;
  }
`;
