import styled from "styled-components";

type StyledImgProps = {
    src: string
    width?: string
    height?: string
}
const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue;
  }
`

const StyledImg = styled.img<StyledImgProps>`{
  src: ${(props) => props.src};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  margin-right: 15px;
}`

export const S ={
    NavWrapper,
    StyledImg
}