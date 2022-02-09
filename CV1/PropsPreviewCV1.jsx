import React from "react";
// Education History Props
function EducatonHistoryPreviewProps(props) {
    return (<>
        <div className="row">
            <div className="col-lg-12">
                <div className="individual-list">
                    <h5 className="header-color">
                        {props.data.university}
                    </h5>
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="content-design">
                                {props.data.course}
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <p className="content-design">
                                {props.data.passingYear}
                            </p>
                        </div>
                    </div>
                    <p className="content-design">
                        {props.data.cgpa}
                    </p>
                </div>
            </div>
        </div>
    </>);
}

function ProfessionalCertificatePreviewProps(props) {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="individual-professional-list" >
                        <h5 className="header-color">
                            {props.data.instituteName}
                        </h5>
                        <div className="row">
                            <div className="col-lg-6">
                                <p className="content-design">
                                    {props.data.course}
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <p className="content-design">
                                    {props.data.duration}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function WorkProjectPreviewProps(props) {
    return (
        <>
            <li key={props.index} className="content-design">
                <div className="row">
                    <div className="col-lg-12">
                        <a href={props.data.projectLink} title={props.data.projectLink} target="_blank" rel="noreferrer" >{props.data.projectName}</a>
                    </div>
                </div>
            </li>
        </>
    );
}
export default EducatonHistoryPreviewProps;
export { ProfessionalCertificatePreviewProps, WorkProjectPreviewProps };