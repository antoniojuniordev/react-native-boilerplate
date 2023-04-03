import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  width: 85%;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 30px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
`;
