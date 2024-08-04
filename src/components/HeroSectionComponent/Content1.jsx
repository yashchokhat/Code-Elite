import { FaDiagramProject } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Content1()
{
    return<>
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 m-1">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="src/assets/ESP8266Project.webp" class="d-block mx-lg-auto img-fluid border" alt="Img Home Automation" width="100%" height="100%" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-light lh-1 mb-3">Home Automation using ESP8266</h1>
        <p class="lead text-light">The Home Automation project aims to provide wireless control over home appliances using an ESP8266 microcontroller, LEDs, relays, switches, Firebase, and an Android app. The core component, the ESP8266, connects to the Wi-Fi network and communicates with the Firebase Realtime Database. Each appliance is controlled via relays connected to the ESP8266, with LEDs providing visual status indicators. Users interact with the system through an Android app developed using Java in Android Studio. The app features intuitive controls to toggle appliances on or off, with Firebase ensuring real-time updates. By leveraging Firebase's robust cloud infrastructure, the system ensures seamless and reliable data synchronization. The project combines hardware and software to create an efficient and user-friendly home automation solution. The use of relays enables safe switching of high-power appliances, while the ESP8266's wireless capability eliminates the need for extensive wiring. </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2"><FaGithub /> GitHub Repository</button>
          <button type="button" class="btn btn-outline-primary btn-lg px-4"><FaDiagramProject /> View Project</button>
        </div>
      </div>
    </div>
    </>
}

export default Content1;