// Context Manger is State Hub. All the states will be passed from here to each & every components. No component will contain its own states.
import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { jsPDF } from "jspdf";
import image from "./CV1/nodp.png";
const cvContext = createContext();
function ContextManager(props) {
    let History = useHistory();
    const content = {
        name: "Jennifer Philips",
        headerLine: "Professional Goals",
        headerLineContent: "I am seeking opportunities to join a company that can help me in enhancing my skills, strengthening my knowledge and realising my potential. I am willing to explore a wide variety of opportunities that can help me gain perspective.",
        headingEducationHistory: "Education History",
        educationHistoryList: [
            {
                university: "University of Tasmania",
                course: "Master in Design",
                cgpa: "7.95 CGPA",
                passingYear: "July'21"
            },
            {
                university: "University of Tasmania",
                course: "Bachelor in Design",
                cgpa: "8.62 CGPA",
                passingYear: "May'18"
            },
            {
                university: "Russian Embassy School",
                course: "High School",
                cgpa: "93%",
                passingYear: "June'15"
            }],
        headingProfessionalCertificate: "Professional Certificates",
        professionalCertificateList: [
            {
                instituteName: "The University of Waikato",
                course: "Certificate of Mastery in English",
                duration: "May'21 - Jan'22"
            },
            {
                instituteName: "Oxford Brookes University",
                course: "English Language and Study Skills",
                duration: "Feb'21 - May'21"
            }
        ],
        headingWorkProject: "Work Project",
        workProjectList: [
            {
                projectName: "Design of Game 2048",
                projectLink: "https://github.com/rohandutta2710/game2048"
            },
            {
                projectName: "UI of RDX Education Website",
                projectLink: "https://github.com/rohandutta2710/rdxeducation"
            },
            {
                projectName: "Layout of Snake Game",
                projectLink: "https://github.com/rohandutta2710/rdx.github.io/tree/main/snake"
            }
        ],
        headingSpecialization: "Specialization",
        specializationList: ["Adobe Photoshop","Adobe Illustrator", "Figma", "Gravit Designer"],
        headingHobbies: "Hobbies",
        hobbies: "Writing, Designing & Swimming",
        headingLanguageKnown: "Language Spoken",
        languageKnown: "English, Hindi, French and German",
        headingPhoneNo: "Mobile: ",
        phoneNo: "+11 451932xxxx",
        headingEmail: "Email: ",
        email: "jenniferphilips@gmail.com",
        headingWebsite: "Website: ",
        website: "https://jenniferphilips.com",
        uploadPhoto: image
    };
    window.addEventListener("resize", (e) => {
        setWindowWidth(e.target.innerWidth);
    })
    const [contentState, setContentState] = useState(content);  //state that consists all the json
    const [workProjectModalForm, setWorkProjectModalForm] = useState({ workIndex: null });
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);  //width of the window
    const PreviewFunc = () => {
        History.push("preview".concat(History.location.pathname.substring(1, History.location.pathname.length)));
    }
    const BackBtn = () => {
        History.push(History.location.pathname.substring(History.location.pathname.length - 3, History.location.pathname.length));
    }
    const DownloadBtn = () => {
        let pdfFile = new jsPDF("potrait", "pt", ["800", "1200"]);
        pdfFile.html(document.getElementById(History.location.pathname.substring(1, History.location.pathname.length)), {
            margin: [15, 0, 100, 0],
            callback: function (pdfFile) {
                pdfFile.save(`${contentState.name}.pdf`);
            }
        });
    }

    return (
        <>
            <cvContext.Provider value={{ contentState, setContentState, workProjectModalForm, setWorkProjectModalForm, PreviewFunc, BackBtn, DownloadBtn, windowWidth, setWindowWidth }}>
                {props.children}
            </cvContext.Provider>
        </>
    )
}
export default ContextManager;
export { cvContext };