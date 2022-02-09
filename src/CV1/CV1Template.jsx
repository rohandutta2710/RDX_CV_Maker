import React, { useContext } from "react";
import { cvContext } from "../ContextManager";
import EducatonHistoryProps, { ProfessionalCertificateProps, WorkProjectProps, PreviewButtonProps } from "./PropsHubCV1";
import "./CV1.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function CV1Template() {
    const usingContext = useContext(cvContext);
    const changingValues = (e) => {
        usingContext.setContentState({ ...usingContext.contentState, [e.target.name]: e.target.value })
    }
    const changeListValues = (e) => {
        let affectedKey = e.target.id.substring(0, e.target.id.indexOf("_"));
        let affectedRow = e.target.id.substr(e.target.id.lastIndexOf("_") + 1, 1);
        if (affectedKey !== "specializationList") {
            let affectedObject = {};
            affectedObject = { [e.target.name]: e.target.value };
            usingContext.contentState[affectedKey][affectedRow] = { ...usingContext.contentState[affectedKey][affectedRow], ...affectedObject };
            usingContext.setContentState(usingContext.contentState);
            if (e.target.name === "projectLink")
                usingContext.setWorkProjectModalForm({ ...usingContext.workProjectModalForm, projectLink: e.target.value })
        }
        else {
            usingContext.contentState[affectedKey][affectedRow] = e.target.value;
            usingContext.setContentState({ ...usingContext.contentState });
        }
        // usingContext.setContentState({ ...usingContext.contentState, })
        // alert(affectedKey)
        // alert(affectedRow)
        // alert(e.target.name)
    }
    const addRowOnClick = (e) => {
        if (usingContext.contentState[e.target.id].length === 9) {
            alert("You have reached the maximum limit.");
        }
        else if (e.target.id === "specializationList") {
            usingContext.setContentState({ ...usingContext.contentState, [usingContext.contentState[e.target.id]]: usingContext.contentState[e.target.id].push("") })
        }
        else {
            usingContext.setContentState({ ...usingContext.contentState, [usingContext.contentState[e.target.id]]: usingContext.contentState[e.target.id].push({}) })
        }
        usingContext.setWorkProjectModalForm({ workIndex: null });
    }

    const deleteClickedRow = (e) => {
        let changedKey = e.target.id.substring(0, e.target.id.length - 1);
        let changedRow = Number(e.target.id[e.target.id.length - 1]);
        //call by the reference is used if i assign the state value to any variable
        let newArr = usingContext.contentState[changedKey];
        //deleting the item based on click
        // newArr.splice(changedRow,1);
        delete newArr[changedRow];
        usingContext.setContentState({ ...usingContext.contentState, [usingContext.contentState[changedKey]]: newArr });
    }
    const fileUpload = (e) => {
        // console.log(e.target.files[0])
        let imageURL = URL.createObjectURL(e.target.files[0]);
        usingContext.setContentState({ ...usingContext.contentState, [e.target.name]: imageURL });
    }
    return (<>
        <div className="outer-container">
            <div className="test-cv-pdf">
                <div className="cv-main-container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="image-upload">
                                <img src={usingContext.contentState.uploadPhoto} alt="loading"></img>
                            </div>
                            <input type="file" accept=".png,.jpeg,.jpg" name="uploadPhoto" onChange={fileUpload}></input>
                            <hr />
                            <h2 style={{ color: "#555e70" }}>Get in touch!</h2>
                            <div className="personal-details">
                                <div className="mobile-details">
                                    <h5><input type="text" className="header-color" defaultValue={usingContext.contentState.headingPhoneNo} name="headingPhoneNo" onChange={changingValues} autoComplete="off" /></h5>
                                    <h5><input type="text" className="content-design" defaultValue={usingContext.contentState.phoneNo} name="phoneNo" onChange={changingValues} autoComplete="off" /></h5>
                                </div>
                                <div className="email-details">
                                    <h5><input type="text" className="header-color" defaultValue={usingContext.contentState.headingEmail} name="headingEmail" onChange={changingValues} autoComplete="off" /></h5>
                                    <h5><input type="email" className="content-design" defaultValue={usingContext.contentState.email} name="email" onChange={changingValues} autoComplete="off" /></h5>
                                </div>
                                <div className="website-details">
                                    <h5><input type="text" className="header-color" defaultValue={usingContext.contentState.headingWebsite} name="headingWebsite" onChange={changingValues} autoComplete="off" /></h5>
                                    <h5><input type="text" className="content-design" defaultValue={usingContext.contentState.website} name="website" onChange={changingValues} autoComplete="off" /></h5>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <div className="cv-header">
                                <h3><input className="header-color header-name" type="text" defaultValue={usingContext.contentState.name} name="name" onChange={changingValues} autoComplete="off" /></h3>
                                <h4><input type="text" className="heading-contents" defaultValue={usingContext.contentState.headerLine} name="headerLine" onChange={changingValues} autoComplete="off" /></h4>
                                <textarea className="header-line-content content-design" defaultValue={usingContext.contentState.headerLineContent} name="headerLineContent" onChange={changingValues} autoComplete="off"></textarea>
                            </div>
                            <hr />
                            {/* Education History */}
                            <div className="cv-education-history">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <h4><input type="text" className="heading-contents" defaultValue={usingContext.contentState.headingEducationHistory} name="headingEducationHistory" onChange={changingValues} autoComplete="off" /></h4>
                                    </div>
                                    <div className="col-lg-3">
                                        <button className="btn btn-primary" id="educationHistoryList" onClick={addRowOnClick}>Add Row</button>
                                    </div>
                                </div>
                                <div className="education-history-list">
                                    {React.Children.toArray(usingContext.contentState.educationHistoryList.map((val, index) => {
                                        return (<><EducatonHistoryProps data={val} id={`educationHistoryList${index}`} index={index} changingData={changeListValues} deleteRow={deleteClickedRow}></EducatonHistoryProps></>);
                                    }))}
                                </div>
                            </div>
                            <hr />
                            {/* Professional Certificate */}
                            <div className="cv-professional-certificate">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <h4><input type="text" className="heading-contents" defaultValue={usingContext.contentState.headingProfessionalCertificate} name="headingProfessionalCertificate" onChange={changingValues} autoComplete="off" /></h4>
                                    </div>
                                    <div className="col-lg-3">
                                        <button className="btn btn-primary" id="professionalCertificateList" onClick={addRowOnClick}>Add Row</button>
                                    </div>
                                </div>
                                <div className="professional-certificate-list">
                                    {React.Children.toArray(usingContext.contentState.professionalCertificateList.map((val, index) => {
                                        return (<><ProfessionalCertificateProps data={val} id={`professionalCertificateList${index}`} index={index} changingData={changeListValues} deleteRow={deleteClickedRow} /></>);
                                    }))}
                                </div>
                            </div>
                            <hr />
                            {/* Work Project */}
                            <div className="cv-work-project">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <h4><input type="text" className="heading-contents" defaultValue={usingContext.contentState.headingWorkProject} name="headingWorkProject" onChange={changingValues} autoComplete="off" /></h4>
                                    </div>
                                    <div className="col-lg-3">
                                        <button className="btn btn-primary" id="workProjectList" onClick={addRowOnClick}>Add Row</button>
                                    </div>
                                </div>
                                <div className="work-project-list">
                                    <ul className="work-ul">
                                        {React.Children.toArray(usingContext.contentState.workProjectList.map((val, index) => {
                                            return (<>
                                                <WorkProjectProps data={val} id={`workProjectList${index}`} index={index} changingData={changeListValues} deleteRow={deleteClickedRow} usingContext={usingContext} />
                                            </>);
                                        }))}
                                    </ul>
                                </div>
                            </div>
                            {/* specilization and hobbies */}
                            <div className="cv-specialization-hobbies">
                                <hr />
                                <div className="row">
                                    <div className="col-lg-6 specialization-line">
                                        <h4>
                                            <input type="text" className="heading-contents" defaultValue={usingContext.contentState.headingSpecialization} name="headingSpecialization" onChange={changingValues} autoComplete="off" />
                                            <button className="btn btn-primary" id="specializationList" onClick={addRowOnClick}>Add Row</button>
                                        </h4>
                                        <ul className="specialization-list">
                                            {React.Children.toArray(usingContext.contentState.specializationList.map((val, index) => {
                                                return (<>
                                                    <li>
                                                        <input className="content-design" type="text" id={`specializationList_speciality_${index}`} name="speciality" value={val} autoComplete="off" onChange={changeListValues} />
                                                        <button className="btn btn-danger" id={`specializationList${index}`} onClick={deleteClickedRow}>Delete</button>
                                                    </li>
                                                </>)
                                            }))}
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="language-known">
                                            <h4><input type="text" className="heading-contents" defaultValue={usingContext.contentState.headingLanguageKnown} name="headingLanguageKnown" onChange={changingValues} autoComplete="off" /></h4>
                                            <h5><input type="text" className="content-design" defaultValue={usingContext.contentState.languageKnown} name="languageKnown" onChange={changingValues} autoComplete="off" /></h5>
                                        </div>
                                        <div className="hobbies">
                                            <h4><input type="text" className="heading-contents" defaultValue={usingContext.contentState.headingHobbies} name="headingHobbies" onChange={changingValues} autoComplete="off" /></h4>
                                            <h5><input type="text" className="content-design" defaultValue={usingContext.contentState.hobbies} name="hobbies" onChange={changingValues} autoComplete="off" /></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PreviewButtonProps callPreviewFunc={usingContext.PreviewFunc} />
    </>);
}
export default CV1Template;