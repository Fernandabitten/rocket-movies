import styled from "styled-components";
import BackgroundImg from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    font-weight: 500;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 42px;
    text-align: center;
    color: ${({theme}) => theme.COLORS.PINK};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center center;
  background-size: cover;  
  `