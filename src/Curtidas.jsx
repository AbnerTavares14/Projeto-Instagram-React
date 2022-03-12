

export default function Curtidas(props){
    const {id, imagemCurtida, curtido, outras} = props;
    return (
        <div key={id} className="curtidas">
            <img src={imagemCurtida} alt="" />
            <div className="texto">
                 Curtido por <strong>{curtido}</strong> e <strong>outras {outras}</strong>
            </div>
        </div>
    )
}