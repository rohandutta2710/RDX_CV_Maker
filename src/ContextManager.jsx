// Context Manger is State Hub. All the states will be passed from here to each & every components. No component will contain its own states.
import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { jsPDF } from "jspdf";
import image from "./CV1/nodp.png";
const cvContext = createContext();
function ContextManager(props) {
    let History = useHistory();
    const content = {
        name: "Rohan Dutta",
        headerLine: "Professional Goals",
        headerLineContent: "Looking to establish a career in the field of Information Technology, I wish to work in a growth-oriented company and contribute to the development of the organization while upgrading my skill set and knowledge.",
        headingEducationHistory: "Education History",
        educationHistoryList: [
            {
                university: "Hansraj College, Delhi University",
                course: "B.Sc. (H) Electronic Science",
                cgpa: "8.878 CGPA",
                passingYear: "July'21"
            },
            {
                university: "Karl Huber School affiliated to C.B.S.E.",
                course: "Senior Secondary School",
                cgpa: "88.4%",
                passingYear: "May'18"
            },
            {
                university: "Karl Huber School affiliated to C.B.S.E.",
                course: "Secondary School",
                cgpa: "9.4 CGPA",
                passingYear: "June'16"
            }],
        headingProfessionalCertificate: "Professional Certificates",
        professionalCertificateList: [
            {
                instituteName: "Brillica Services",
                course: "Full Stack Web Developer",
                duration: "May'21 - Sept'21"
            },
            {
                instituteName: "Hansraj College, Delhi University",
                course: "Introduction to Machine Learning",
                duration: "Aug'20 - Aug'21"
            }
        ],
        headingWorkProject: "Work Project",
        workProjectList: [
            {
                projectName: "Game 2048 using ReactJS",
                projectLink: "https://github.com/rohandutta2710/game2048"
            },
            {
                projectName: "RDX Education Website using ReactJS",
                projectLink: "https://github.com/rohandutta2710/rdxeducation"
            },
            {
                projectName: "TicTacToe using using HTML, CSS,JavaScript ",
                projectLink: ""
            },
            {
                projectName: "Snake Game using HTML, CSS, JavaScript",
                projectLink: "https://github.com/rohandutta2710/rdx.github.io/tree/main/snake"
            }
        ],
        headingSpecialization: "Specialization",
        specializationList: ["HTML", "MS Word", "Figma"],
        headingHobbies: "Hobbies",
        hobbies: "Reading, Writing, Coding & Swimming",
        headingLanguageKnown: "Language Spoken",
        languageKnown: "English & Hindi",
        headingPhoneNo: "Mobile: ",
        phoneNo: "+91 9811078851",
        headingEmail: "Email: ",
        email: "rohandutta27102000@gmail.com",
        headingWebsite: "Website: ",
        website: "https://rohandutta.netlify.app/",
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