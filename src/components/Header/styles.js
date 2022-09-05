import styled from "styled-components";

export const Container = styled.header`
  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 24px 123px;
`;

export const Brand  = styled.div`
  padding: 13px 0;
  > h1 {
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.PINK};
  }
`;

export const Search  = styled.div`
  width: 630px;
  padding: 0 10px;
`;

export const Profile = styled.div`
  display: flex;
  > img {
    width: 64px;
    height: 64px;
    border-radius: 35px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 18px;
    padding: 16px 9px;

    span {
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.GRAY_100};
      text-align: end;
    }

    strong {
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  > svg {
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }
`
