export default function Conteudo(props){
    const {id, conteudo} = props;
    return (
        <div key={id} className="conteudo">
            <img src={conteudo} alt="" />
        </div>
    )
}