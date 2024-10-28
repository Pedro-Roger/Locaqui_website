import Logo from "../molecules/Logo";
import * as S from "./Styles"

const Header = () => {
    return ( 
        <S.HeaderContainer>
            <S.Link>Cursos</S.Link>
            <S.Link>Aluguel</S.Link>
            <Logo/>
            <S.Link>Recarga</S.Link>
            <S.Link>Vantagens</S.Link>
        </S.HeaderContainer>
     );
}
 
export default Header;