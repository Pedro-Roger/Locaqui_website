
import Logo2 from "../../assets/logoaqui.png"
import * as S from "./Styles"

const Main = () => {
    return ( 
    <S.MainContainer>

        <S.Logo src={Logo2} />
        <S.Paragraph>está procurando carro elétrico ?
        serviços de aluguel e recarga com os melhores preços do mercado</S.Paragraph>
        <S.Button>Fale Conosco</S.Button>

    </S.MainContainer>
     );
}
 
export default Main;