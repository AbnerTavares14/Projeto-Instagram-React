export default function UsuarioSidebar(props) {
    const {imagem, nome, razao} = props;
    return(
    <div className="usuario">
        <img src={imagem} alt="" />
        <div className="texto">
            <div className="nome">{nome}</div>
            <div className="razao">{razao}</div>
        </div>
    </div>
    )
}