import styled from "styled-components";
import { mobile, tablet, laptop } from "../../styles/breakpoints";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
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

const Header = () => {

  return ( 
    <Container>
      <ImgContainer src="public\logo-horizontal.png"/>
    </Container>
   );
}
 
export default Header;