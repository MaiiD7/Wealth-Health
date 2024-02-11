import { css } from 'styled-components';

// breakpoints
const size = {
  mobile: "576px",
  tablet: "768px",
  laptop: "1024px"
};

// Media Queries
export const mobile = (inner) => css`
  @media (max-width: ${size.mobile}) {
    ${inner};
  }
`;
export const tablet = (inner) => css`
  @media (max-width: ${size.tablet}) {
    ${inner};
  }
`;
export const laptop = (inner) => css`
  @media (max-width: ${size.laptop}) {
    ${inner};
  }
`;