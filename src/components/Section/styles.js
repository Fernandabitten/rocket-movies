import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;
  margin-top: 0;

  > h2 {
    padding-bottom: 16px;
    margin-bottom: 28px;

    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 32px;
    font-weight: 400;
    font-size: 20px;
    font-weight: 400; 
  }
`