import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { UsersThree } from 'phosphor-react-native';

// a gente deixa deissa forma com o () pq se n deixar o typeScript n entende bem q aq
// dentro é um botão e tudo mais...
export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text.attrs(() => ({
  numberOfLines: 2
}))`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Icon = styled(UsersThree).attrs(({theme}) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: 'fill'
}))`
  margin-right: 20px;
`;