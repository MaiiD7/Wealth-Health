import { css } from 'styled-components';

// Media Queries
export const mobile = (inner) => css`
  @media (max-width: ${props => props.theme.breakpoints.values.sm}px) {
    ${inner};
  }
`;
export const tablet = (inner) => css`
  @media (max-width: ${props => props.theme.breakpoints.values.md}px}) {
    ${inner};
  }
`;
export const laptop = (inner) => css`
  @media (max-width: ${props => props.theme.breakpoints.values.lg}px}) {
    ${inner};
  }
`;