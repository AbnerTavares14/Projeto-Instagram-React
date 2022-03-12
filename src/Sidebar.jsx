import UsuarioSidebar from "./UsuarioSidebar"

const sugestoes = [
    { imagem: "imagens/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você", id: 50 },
    { imagem: "imagens/chibirdart.svg", nome: "chibirdart", razao: "Segue você", id: 51 },
    { imagem: "imagens/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram", id: 52 },
    { imagem: "imagens/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você", id: 53 },
    { imagem: "imagens/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você", id: 54 }
]



export default function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="usuario">
                <img src="imagens/catanacomics.svg" alt="" />
                <div className="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {
                    sugestoes.map(sugestao =>
                        <div key={sugestao.id} className="sugestao">
                            <UsuarioSidebar imagem={sugestao.imagem} nome={sugestao.nome} razao={sugestao.razao} />
                            
                            <div className="seguir">Seguir</div>
                        </div>
                    )
                }
            </div>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
                    
    )
}