import Imagem from "./Imagem"
import Usuario from "./Usuario"
import Post from "./Post"
import Sidebar from "./Sidebar";


const arrayStories = [
    { imagem: "imagens/9gag.svg", usuario: "9gag", id: 100 },
    { imagem: "imagens/meowed.svg", usuario: "meowed", id: 101 },
    { imagem: "imagens/barked.svg", usuario: "barked", id: 102 },
    { imagem: "imagens/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet", id: 103 },
    { imagem: "imagens/wawawicomics.svg", usuario: "wawawicomics", id: 104 },
    { imagem: "imagens/respondeai.svg", usuario: "respondeai", id: 105 },
    { imagem: "imagens/filomoderna.svg", usuario: "filomoderna", id: 106 },
    { imagem: "imagens/memeriagourmet.svg", usuario: "memeriagourmet", id: 107 }
];



export default function Corpo() {
    return (
        <section className="corpo">
            <div className="esquerda">
                <div className="stories">
                    {arrayStories.map(storie =>
                        <div key={storie.id} className="story">
                            <Imagem imagem={storie.imagem} />
                            <Usuario usuario={storie.usuario} />
                        </div>
                    )}
                    <div className="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>
                <div className="posts">
                    <Post />
                </div>
            </div>
            <Sidebar />
        </section >
    );
}











