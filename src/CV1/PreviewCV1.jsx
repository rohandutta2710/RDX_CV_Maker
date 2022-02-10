import React, { useContext } from "react";
import { cvContext } from "../ContextManager";
import { BackBtnPreview } from "./PropsHubCV1";
import Navbar from "../Navbar";
import "./CV1.css";
import EducatonHistoryPreviewProps, { ProfessionalCertificatePreviewProps, WorkProjectPreviewProps } from "./PropsPreviewCV1";
function PreviewCV1() {
    const usingContext = useContext(cvContext);
    return (<>
        <Navbar />
        <div className="outer-container">
            <div className="test-pdf">
                <div className="cv-main-container" id="previewcv1" style={{ paddingTop: "3px" }}>
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="image-upload">
                                <img src={usingContext.contentState.uploadPhoto} alt="loading"></img>
                            </div>
                            <hr />
                            <h2 style={{ color: "#555e70", fontSize: "23px" }}>Get in touch!</h2>
                            <div className="personal-details">
                                <div className="mobile-details">
                                    <h5 className="header-color">{usingContext.contentState.headingPhoneNo}</h5>
                                    <h5 className="content-design">{usingContext.contentState.phoneNo}</h5>
                                </div>
                                <div className="email-details">
                                    <h5 className="header-color">{usingContext.contentState.headingEmail}</h5>
                                    <p className="content-design">{usingContext.contentState.email}</p>
                                </div>
                                <div className="website-details">
                                    <h5 className="header-color">{usingContext.contentState.headingWebsite}</h5>
                                    <h5 className="content-design">
                                        {usingContext.contentState.website.includes("http") ? <a href={usingContext.contentState.website} title={usingContext.contentState.website} target="_blank" rel="noreferrer" className="preview-website">{usingContext.contentState.website}</a> : <p className="preview-website content-design">{usingContext.contentState.website}</p>}

                                    </h5>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <div className="cv-header">
                                <h3 className="header-color header-name">{usingContext.contentState.name}</h3>
                                <h4 className="heading-contents">{usingContext.contentState.headerLine}</h4>
                                <p className="content-design header-line-content profession-goals">{usingContext.contentState.headerLineContent}</p>
                            </div>
                            <hr />
                            {/* Education History */}
                            <div className="cv-education-history">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h4 className="heading-contents">{usingContext.contentState.headingEducationHistory}</h4>
                                    </div>
                                </div>
                                <div className="education-history-list">
                                    {React.Children.toArray(usingContext.contentState.educationHistoryList.map((val) => {
                                        return (<EducatonHistoryPreviewProps data={val} />);
                                    }))}
                                </div>
                            </div>
                            <hr />
                            {/* Professional Certificate */}
                            <div className="cv-professional-certificate">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h4 className="heading-contents">{usingContext.contentState.headingProfessionalCertificate}</h4>
                                    </div>
                                </div>
                                <div className="professional-certificate-list">
                                    {React.Children.toArray(usingContext.contentState.professionalCertificateList.map((val) => {
                                        return (<ProfessionalCertificatePreviewProps data={val} />);
                                    }))}
                                </div>
                            </div>
                            <hr />
                            {/* Work Project */}
                            <div className="cv-work-project">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h4 className="heading-contents">{usingContext.contentState.headingWorkProject}</h4>
                                    </div>
                                </div>
                                <div className="work-project-list">
                                    <ul className="work-ul">
                                        {React.Children.toArray(usingContext.contentState.workProjectList.map((val) => {
                                            return (<>
                                                <WorkProjectPreviewProps data={val} />
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
                                        <h4 className="heading-contents">
                                            {usingContext.contentState.headingSpecialization}
                                        </h4>
                                        <ul className="specialization-list">
                                            {React.Children.toArray(usingContext.contentState.specializationList.map((val, index) => {
                                                return (<>
                                                    <li className="content-design" >
                                                        {val}
                                                    </li>
                                                </>)
                                            }))}
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="language-known">
                                            <h4 className="heading-contents">{usingContext.contentState.headingLanguageKnown}</h4>
                                            <h5 className="content-design">{usingContext.contentState.languageKnown}</h5>
                                        </div>
                                        <div className="hobbies">
                                            <h4 className="heading-contents">{usingContext.contentState.headingHobbies}</h4>
                                            <p className="content-design">{usingContext.contentState.hobbies}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>
        </div>
        <BackBtnPreview />
    </>);
}
export default PreviewCV1;