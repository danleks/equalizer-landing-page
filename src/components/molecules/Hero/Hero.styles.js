import styled from 'styled-components';

export const HeroStyles = styled.section`
  --hero-width: 32.7rem;
  --hero-gap: 2rem;
  --hero-padding-top: 6.4rem;
  display: flex;
  flex-direction: column;

  gap: var(--hero-gap);
  width: var(--hero-width);
  padding-top: var(--hero-padding-top);

  @media (min-width: 768px) {
    --hero-width: 52rem;
    --hero-gap: 2.8rem;
    --hero-padding-top: 9.5rem;
  }

  @media (min-width: 1440px) {
    --hero-width: 84.5rem;
    --hero-gap: 4rem;
    --hero-padding-top: 12.7rem;
  }
`;
