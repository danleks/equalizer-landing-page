import styled from 'styled-components';

export const ContentWrapperStyles = styled.div`
  padding: ${({ hasPadding }) => (hasPadding ? '0 2.4rem' : 0)};
  @media (min-width: 768px) {
    padding: ${({ hasPadding }) => (hasPadding ? '0 3.9rem' : 0)};
  }
  @media (min-width: 1440px) {
    padding: ${({ hasPadding }) => (hasPadding ? '0 16.6rem' : 0)};
  }
`;
