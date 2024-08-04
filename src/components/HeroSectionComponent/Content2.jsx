import { FaDiagramProject } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Content2() {
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
                            src="https://www.youtube.com/embed/OBml5swA_x8?si=yNJBeNG0OMdDtDRK"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-light lh-1 mb-3">Installing Windows exe in Linux</h1>
                    <p className="lead text-light">
                        In this tutorial, we explore how to install and run Windows executable (exe) files on a Linux system using Wine. Wine is a powerful compatibility layer that allows you to run Windows applications on Unix-like operating systems such as Linux. We'll start by showing you how to install Wine on your specific Linux distribution, followed by configuring Wine for optimal performance. Once set up, you'll learn how to run Windows exe files seamlessly. We'll also address common issues and troubleshooting tips to ensure a smooth experience. Whether you're new to Linux or looking to enhance your software compatibility, this guide will help you integrate Windows applications into your Linux environment effortlessly. Don't forget to like, comment, and subscribe for more insightful Linux tutorials!
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

export default Content2;
