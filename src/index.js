import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routings from "./Routings";
import ContextManager from "./ContextManager.jsx";
import InCompatibleSize from "./InCompatibleSize.jsx";
import {cvContext} from "./ContextManager";
import Navbar from "./Navbar";
function Displays() {
    let usingContext = useContext(cvContext);
    return (<>
        {usingContext.windowWidth >= 1000 ? <><Navbar/><Routings /></> : <InCompatibleSize />}
    </>)
}
ReactDOM.render(<BrowserRouter><ContextManager>
    <Displays />
</ContextManager></BrowserRouter>, document.getElementById("root"))