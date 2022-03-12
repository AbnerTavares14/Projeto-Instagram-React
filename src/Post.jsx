import UsuarioPost from "./UsuarioPost";
import Curtidas from "./Curtidas";
import Conteudo from "./Conteudo";


const arrayPosts = [
    {imagem: "imagens/meowed.svg", usuario: "meowed", imagemCurtida: "imagens/respondeai.svg", conteudo:"imagens/gato-telefone.svg", curtido: "respondeai", outras: "101.523 pessoas" , id: 108},
    {imagem: "imagens/barked.svg", usuario: "barked", imagemCurtida: "imagens/adorable_animals.svg", conteudo:"imagens/dog.svg", curtido: "adorable_animals", outras: "outras 99.159 pessoas", id: 109}
]

export default function Post(props){
    return arrayPosts.map(post => 
    <div key={post.id} className="post">
      <div className="topo">
         <UsuarioPost imagem={post.imagem} usuario={post.usuario}/> 
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <Conteudo conteudo={post.conteudo}/>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <Curtidas imagemCurtida={post.imagemCurtida} curtido={post.curtido} outras={post.outras} />

      </div>
    </div>
    )
}