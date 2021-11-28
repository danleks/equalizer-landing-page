import styled from 'styled-components';

export const TextStyles = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.xxs};

  color: ${({ theme, isWhite }) => (isWhite ? theme.colors.white : theme.colors.black)};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
    line-height: ${({ theme }) => theme.lineHeight.xs};
  }

  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: ${({ theme }) => theme.lineHeight.s};
  }
`;
