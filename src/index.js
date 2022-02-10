import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routings from "./Routings";
import ContextManager from "./ContextManager.jsx";
import InCompatibleSize from "./InCompatibleSize.jsx";
import {cvContext} from "./ContextManager";
function Displays() {
    let usingContext = useContext(cvContext);
    return (<>
        {usingContext.windowWidth >= 1000 ? <><Routings /></> : <InCompatibleSize />}
    </>)
}
ReactDOM.render(<BrowserRouter><ContextManager>
    <Displays />
</ContextManager></BrowserRouter>, document.getElementById("root"))