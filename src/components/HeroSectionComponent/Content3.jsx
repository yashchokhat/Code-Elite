import { FaDiagramProject } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Content3() {
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
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5 m-1">
                <div className="col-10 col-sm-8 col-lg-6">
                    <div style={iframeContainerStyle}>
                        <iframe className="border"
                            style={iframeStyle}
                            src="https://www.youtube.com/embed/gGLS13LfSg0?si=rWoqks1YEzYcq5mZ" 
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-light lh-1 mb-3">Running Java Applet in Intellij Idea</h1>
                    <p className="lead text-light">
                    Running a Java Applet in IntelliJ IDEA involves a few steps since applets are an older technology and support for them has been deprecated in many modern environments. However, you can still run them for educational or legacy reasons. Here is a step-by-step guide to help you set up and run a Java Applet in IntelliJ IDEA.
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

export default Content3;
