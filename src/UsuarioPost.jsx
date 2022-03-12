export default function UsuarioPost(props) {
  const {id, imagem, usuario} = props;
  return (
        <div key={id} className="usuario">
          <img src={imagem} alt=""/>
          {usuario}
        </div>
      )
}