import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { mobile, tablet, laptop } from "../../styles/breakpoints";

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `

const MainTitle = styled.h2`
  line-height: 0;
  font-weight: 900;
  color: rgba(60, 120, 238, 1);
  font-size: 25px;

  ${laptop`
  font-size: 22px;
  `}
  ${tablet`
  font-size: 20px;
  `}
  ${mobile`
  font-size: 18px;
  `}
`

const Title = () => {

  const location = useLocation().pathname;

  return ( 
    <TitleContainer>
      <MainTitle>Human Ressources</MainTitle>
      <Link style={{lineHeight: 1.2, fontSize: '15px'}} to={location === '/employees' ? '/' : '/employees'}>
        {location === '/employees' ? 'Home →' : 'View current employees →'}
      </Link>
    </TitleContainer>
   );
}
 
export default Title;