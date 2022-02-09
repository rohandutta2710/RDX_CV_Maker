import React, { useContext } from "react";
import { cvContext } from "../ContextManager";
// Education History Props
function EducatonHistoryProps(props) {
    return (<>
        <div className="row">
            <div className="col-lg-10">
                <div className="individual-list" key={props.index + 1}>
                    <h5>
                        <input type="text" className="header-color" id={`educationHistoryList_university_${props.index}`} name="university" defaultValue={props.data.university} autoComplete="off" onChange={props.changingData} />
                    </h5>
                    <div className="row">
                        <div className="col-lg-8">
                            <p>
                                <input type="text" className="content-design" id={`educationHistoryList_course_${props.index}`} name="course" defaultValue={props.data.course} autoComplete="off" onChange={props.changingData} />
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <p>
                                <input type="text" className="content-design" id={`educationHistoryList_passingYear_${props.index}`} name="passingYear" defaultValue={props.data.passingYear} autoComplete="off" onChange={props.changingData} />
                            </p>
                        </div>
                    </div>
                    <p>
                        <input type="text" className="content-design" id={`educationHistoryList_cgpa_${props.index}`} name="cgpa" defaultValue={props.data.cgpa} autoComplete="off" onChange={props.changingData} />
                    </p>
                </div>
            </div>
            <div className="col-lg-2">
                <div className="delete-row-button">
                    <button className="btn btn-danger" id={props.id} onClick={props.deleteRow}>Delete</button>
                </div>
            </div>
        </div>
    </>);
}

// Professional Certificate Props
function ProfessionalCertificateProps(props) {
    return (<>
        <div className="row" key={props.index + 1}>
            <div className="col-lg-10">
                <div className="individual-professional-list" >
                    <h5>
                        <input type="text" className="header-color" id={`professionalCertificateList_institueName_${props.index}`} name="instituteName" defaultValue={props.data.instituteName} autoComplete="off" onChange={props.changingData} />
                    </h5>
                    <div className="row">
                        <div className="col-lg-8">
                            <p>
                                <input type="text" className="content-design" id={`professionalCertificateList_course_${props.index}`} name="course" defaultValue={props.data.course} autoComplete="off" onChange={props.changingData} />
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <p>
                                <input type="text" className="content-design" id={`professionalCertificateList_duration_${props.index}`} name="duration" defaultValue={props.data.duration} autoComplete="off" onChange={props.changingData} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-2">
                <div className="delete-row-button">
                    <button className="btn btn-danger" id={props.id} onClick={props.deleteRow}>Delete</button>
                </div>
            </div>
        </div>
    </>);
}

// Work Project Props
function WorkProjectProps(props) {
    return (<>
        <li key={props.index}>
            <div className="row">
                <div className="col-lg-6">
                    <input type="text" className="content-design" id={`workProjectList_projectName_${props.index}`} name="projectName" defaultValue={props.data.projectName} autoComplete="off" onChange={props.changingData} />
                </div>
                <div className="col-lg-6">
                    <div className="delete-row-button">
                        <AddLink data={props.data} index={props.index} changingData={props.changingData} usingContext={props.usingContext} />
                        <button className="btn btn-danger" id={props.id} onClick={props.deleteRow}>Delete</button>
                    </div>
                </div>
            </div>
        </li>
    </>);
}

function AddLink(props) {
    const usingContext = useContext(cvContext);
    const displaySelectedItem = (e) => {
        let affectedRow = e.target.id.substr(e.target.id.length - 1, 1);
        // usingContext.workProjectModalForm = { workIndex: affectedRow, ...usingContext.contentState.workProjectList[affectedRow] };
        usingContext.setWorkProjectModalForm({ ...props.data, workIndex: affectedRow, ...usingContext.contentState.workProjectList[affectedRow] });
    }
    return (<>
        <button type="button" onClick={displaySelectedItem} className={`btn btn-${props.data.projectLink == null || props.data.projectLink.length === 0 ? 'primary' : 'success'} add-link-btn`} id={`workProjectList${props.index}`} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            {props.data.projectLink == null || props.data.projectLink.length === 0 ? "Add Link" : "Update"}
        </button>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <label><b>Project Name: </b><q>{usingContext.workProjectModalForm !== null ? usingContext.workProjectModalForm.projectName : null}</q> </label>
                        <br />
                        <p>
                            <label><b>Link: </b><input type="text" id={`workProjectList_projectLink_${usingContext.workProjectModalForm.workIndex}`} name="projectLink" value={usingContext.workProjectModalForm.projectLink != null && usingContext.workProjectModalForm.projectLink != undefined ? usingContext.workProjectModalForm.projectLink : ""} autoComplete="off" onChange={props.changingData} />  </label>
                        </p>
                    </div>
                    <div className="modal-footer">
                        {/* <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button> */}
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" >Add</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

// preview button props
function PreviewButtonProps(props) {
    return (
        <>
            <div className="preview-button">
                <button className="btn btn-primary" onClick={props.callPreviewFunc}>Preivew</button>
            </div>
        </>
    )
}

//back and download button of preview page
function BackBtnPreview() {
    const usingContext = useContext(cvContext);
    return (
        <div className="buttons-back-save">
            <button className="btn btn-primary" onClick={usingContext.BackBtn}>Back</button>
            <button className="btn btn-success" onClick={usingContext.DownloadBtn}>Download</button>
        </div>);
}
export default EducatonHistoryProps;
export { ProfessionalCertificateProps, WorkProjectProps, AddLink, PreviewButtonProps,BackBtnPreview };