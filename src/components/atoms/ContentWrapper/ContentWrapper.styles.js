import styled from 'styled-components';

export const ContentWrapperStyles = styled.div`
  padding-left: ${({ hasPadding }) => (hasPadding ? '2.4rem' : 0)};
`;
