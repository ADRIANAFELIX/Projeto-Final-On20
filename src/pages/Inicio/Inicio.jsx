import Header from '../../Componentes/Header/Header'
import Textos from '../../Componentes/Textos/Textos'
import Footer from '../../Componentes/Footer/Footer'
import corpo1 from '../../assets/foto1.jpeg'

import './inicio.css'

function Inicio() {
    return(
        <>
            <Header >
            Violência contra a mulher em tempo de Pandemia
            </Header>
            <section className='conteudo'>
                <div className='texto'>
                    
                    <Textos>
                    Violência contra a mulher é um conceito para definir diferentes tipos de violência sofridos por mulheres porque são mulheres, o que inclui desde assédio moral até homicídio. É uma forma de violência de gênero, que caracteriza agressões contra mulheres, transexuais, travestis e homossexuais. Independente do tipo de violência cometido, os direitos humanos da mulher e sua integridade física, psicológica e moral são desrespeitados. 
                    Vimos esse numero crescer em tempos de pandemia e isolamento social, onde as mulheres ficam mais tempo em casa, na companhia de parceiros, tutores e familiares, o número de casos e denúncias sobre violências aumentou significativamente.
                    <p>O termo “Violência contra a mulher” resume diversos tipos de violência que acontecem sistematicamente no Brasil e no mundo por questões de gênero. Ou seja, mulheres agredidas porque são mulheres. Essas agressões não se limitam apenas ao ato físico, mas a atos lesivos que resultem em danos psicológicos, emocionais, patrimoniais, financeiros, entre tantos outros.</p>
                    </Textos>
                    <img src={corpo1} className='img2' alt="Foto de uma mulher com mão para frente" />
                    <Textos>
                    Lei de Violência Doméstica e Familiar

                    <p>Maria da Penha, a mulher que inspirou a Lei de Violência Doméstica no Brasil.
                    A primeira forma legal de proteção de vítimas de violência doméstica foi publicada em 7 de agosto de 2006 pelo então presidente Lula (PT), que assinou a lei n.º 11.340/2006, chamada de Lei de Violência Doméstica e Familiar e conhecida como Lei Maria da Penha. Esta famosa lei foi o resultado de um processo internacional, liderado por Maria da Penha, uma vítima de violência doméstica que foi baleada aos 37 anos por seu marido com um rifle, que também tentou eletrocutar ela no banheiro. Como consequência, ela se tornou paralítica e começou uma longa batalha nos tribunais para conseguir a condenação de seu marido. Na década de 1990, Maria da Penha recorreu à Comissão Interamericana de Direitos Humanos e, em 2001, ela foi capaz de obter justiça e manter o governo brasileiro responsável pela tolerância judiciária da violência doméstica. A comissão também recomendou que o governo brasileiro adotasse medidas mais eficazes contra as vítimas mulheres</p>
                    </Textos>
                    <img className='img-inicio' src="https://miro.medium.com/max/1080/1*fhzbyB10gDdqGK9e9q9Zjg.png" />
                    <Textos> 
                    
                    </Textos>
                    
                    <Textos>
                    Se você é vitima ou conhece alguém que está em um ciclo de violência doméstica
                    <p>Não se cale, denuncie</p>
                    <img className='img-inicio' src='https://www2.itanhaem.sp.gov.br/wp-content/uploads/2019/03/placa-lei4236.jpg' />    
                    </Textos>
                    <div className='div-envio'>
                <h1>Saiba mais sobre violência sofrida por mulheres através do site: Instituto Maria da Penha e conheça seus projetos, voltados para ajudar mulheres em situação de violência.</h1>
                <a className='envio' href="https://www.institutomariadapenha.org.br/" target="_blanck"><b>Clique aqui</b></a>
            </div>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Inicio