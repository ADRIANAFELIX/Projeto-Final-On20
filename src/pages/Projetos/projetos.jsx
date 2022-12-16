import Header from '../../Componentes/Header/Header'
import Footer from '../../Componentes/Footer/Footer'
import florescermulher from '../../assets/florescermulher.png'
import bemmequerobem from '../../assets/bemmequerobem.png'
import cuidardemim from '../../assets/cuidardemim.jpg'

import './projetos.css'

function Projetos() {
    return(
        <>
            <Header>
        Projetos que dão suporte para mulheres vítimas de violência no Brasil
            </Header>
            <section className='container'>
                <div className='container-cards'>
                <div className='card-1'>
                        <div className="card-topo">
                        <img src={florescermulher} className="imagem" alt="Foto da logomarca do projeto"/>
                        </div>
                        <div className="card-corpo">
                            <h2 className="">Projeto</h2>
                            <h3 className="trabalho">Projeto florescer Mulheres</h3>
                            
                            <p className="card-texto">
                            Criado para favorecer o fortalecimento da autoestima por parte da mulher que sofre violência. Além disso, contempla o restabelecimento do direito à convivência familiar e comunitária em condições dignas e a identificação e desenvolvimento do potencial para superação e redução de danos sofridos pelo sujeito
                            </p>
                        </div>
                        <div className="card-rodape">
                            <a href="https://www.mppb.mp.br/index.php/35-noticias/mulher/21045-projeto-florescer-mulheres-objetiva-romper-o-ciclo-da-violencia-domestica"target="_blanck">Clique e saiba mais</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-topo">
                            <img src={bemmequerobem} className="imagem" alt="Foto da logo do projeto com cor de fundo lilás"
                            />
                        </div>
                        <div className="card-corpo">
                            <h2 className="Projeto">Projeto</h2>
                            <h3 className="projeto">Bem-me-quero-bem</h3>
                            
                            <p className="card-texto">
                            É nesse contexto que nasce o Projeto Bem-me-quero-bem, como um canal para que as 
                            colaboradoras do Poder Judiciário possam falar sobre os desafios da convivência 
                            afetiva e familiar e receber as orientações, bem como proceder os encaminhamentos à rede proteção, quando necessário.
                            </p>
                        </div>
                        <div className="card-rodape">
                            <a href="https://www.tjrs.jus.br/novo/violencia-domestica/projetos/bem-me-quero-bem/"target="_blanck">Clique e saiba mais</a>
                        </div>
                        </div>
                        <div className='card-1'>
                        <div className="card-topo">
                            <img src={cuidardemim} className="imagem" alt="logo do projeto cuidar de de mim "/>
                        </div>
                        <div className="projeto3">
                            <h2 className="projeto">Projeto</h2>
                            <h3 className="projeto">Cuidar de mim</h3>
                            <p className="card-texto">
                            Objetivo principal é dar apoio as mulheres vítimas de violência doméstica, 
                            resgatar a autoestima da mulher e dar a oportunidade de fazer cursos de aprendizagem 
                            profissional para inserção no mercado de trabalho.
                            </p>
                        </div>
                        <div className="card-rodape">
                            <a href="https://www.tjpb.jus.br/noticia/projeto-cuidar-de-mim-do-tjpb-sera-retomado-na-grande-joao-pessoa-a-partir-de-marco/"target="_blanck">Clique e saiba mais</a>
                        </div>                    
                    </div>
                </div>
            </section>
            <div className='div-envio'>
                <h1>Conheça também a {"{reprograma}"}  que tem transformado a vida de milhares de mulheres cis e trans e foca em ensinar programação para aquelas que não possuem recursos ou que querem aprender.</h1>
                <a className='envio' href="https://reprograma.com.br/" target="_blanck"><b>Saiba mais</b></a>
            </div>
            <footer>
                <Footer />                
            </footer>
        </>
    )
}
export default Projetos