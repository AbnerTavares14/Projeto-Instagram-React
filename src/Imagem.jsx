export default function Imagem(props) {
    const {imagem, id} = props;
    return (
                <div key={id} className="imagem">
                    <img src={imagem} alt="" />
                </div>
            )
}