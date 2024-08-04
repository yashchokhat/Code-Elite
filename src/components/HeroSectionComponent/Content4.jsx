import { FaDiagramProject } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Content4() {
    const iframeContainerStyle = {
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%',
        height: '0',
        overflow: 'hidden',
        marginBottom: '1rem', 
    };

    const iframeStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
    };

    return (
        <>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5 m-1 ">
                <div className="col-10 col-sm-8 col-lg-6">
                    <div style={iframeContainerStyle}>
                        <iframe className="border"
                            style={iframeStyle}
                            src="https://www.youtube.com/embed/4wZbu_Ug9fA?si=SHY4MJQafr-fgD2v" 
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-light lh-1 mb-3">Instagram Mass Reporting</h1>
                    <p className="lead text-light">
                    Introducing the Instagram Mass Reporting Bot, a powerful Python script designed to automate the process of reporting Instagram accounts continuously. This innovative tool simplifies the task of flagging inappropriate or harmful profiles, helping you maintain a safer and more positive online environment. With its advanced automation capabilities, the bot ensures efficient and effective reporting with minimal effort required from your end. Ideal for community managers, digital marketers, and social media enthusiasts, our bot adheres to Instagram's community guidelines, making it a responsible choice for enhancing social media safety. Empower your Instagram presence with our cutting-edge solution and contribute to a cleaner, safer digital space.
                      </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                            <FaGithub /> GitHub Repository
                        </button>
                        <button type="button" className="btn btn-outline-primary btn-lg px-4">
                            <FaDiagramProject /> View Project
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content4;
