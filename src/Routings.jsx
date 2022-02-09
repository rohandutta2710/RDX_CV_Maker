import React from "react";
import { Route, Switch } from "react-router-dom";
import CV1Template from "./CV1/CV1Template.jsx";
import PreviewCV1 from "./CV1/PreviewCV1";
import Error404 from "./Error404.jsx";
function Routings() {
    return (
        <>
            <Switch>
                <Route exact path="/cv1" component={CV1Template}/>
                <Route exact path="/previewcv1" component={PreviewCV1}/>
                <Route exact path="*" component={Error404}/>
            </Switch>
        </>
    );
}
export default Routings;