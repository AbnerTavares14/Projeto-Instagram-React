import reactDom from "react-dom";
import Topo from "./Topo";
import Corpo from "./Corpo";
import FundoMobile from "./FundoMobile";


function App(){
    return (
        <div>
            <Topo />
            <Corpo />
            <FundoMobile />
        </div>
    )
}

const root = document.querySelector(".root");

reactDom.render(<App />, root);