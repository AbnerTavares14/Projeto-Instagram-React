import reactDom from "react-dom";
import Topo from "./Topo";
import Corpo from "./Corpo";

function App(){
    return (
        <div>
            <Topo />
            <Corpo />
        </div>
    )
}

const root = document.querySelector(".root");

reactDom.render(<App />, root);