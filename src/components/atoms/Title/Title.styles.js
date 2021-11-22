import styled from 'styled-components';

export const MainTitleStyles = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.l};
  letter-spacing: ${({ theme }) => theme.letterSpacing.s};

  color: ${({ theme }) => theme.colors.black};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
    letter-spacing: ${({ theme }) => theme.letterSpacing.m};
    line-height: 1;
  }

  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    letter-spacing: ${({ theme }) => theme.letterSpacing.l};
    line-height: 1;
  }
`;

export const SecondaryTitleStyles = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.white};
`;
