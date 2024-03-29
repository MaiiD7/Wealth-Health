import styled from "styled-components";
import { mobile, tablet, laptop } from "../../utils/mediaQueries";
import { Link } from "react-router-dom";

const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  width: fit-content;
`

const ImgContainer = styled.img`
  max-width: 13vw;

  ${laptop`
  max-width: 17vw;
  `}
  ${tablet`
  max-width: 21vw;
  `}
  ${mobile`
  max-width: 32vw;
  `}
`
// Display header with the logo
const Header = () => {
  return ( 
    <Container to={'/'}>
      <ImgContainer src="/logo-horizontal.png" alt="Wealth Health Logo"/>
    </Container>
   );
}
 
export default Header;