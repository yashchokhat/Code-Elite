import { LuMessagesSquare } from "react-icons/lu";
function Contact()
{

    return<>
    
    <div class="row align-items-center g-lg-5 py-5 w-100">
      <div class="col-md-10 mx-auto col-lg-5">
      <h1 class="display-4 lh-1 text-info mb-3"><LuMessagesSquare /> Contact Our Team....</h1>
        <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary" action="https://api.web3forms.com/submit" method="POST">

        <input type="hidden" name="access_key" value="aff8b884-045e-4fac-a532-c4278d88203c"/>

        <div class="form-floating mb-3">
            <input type="text" name="name" class="form-control" id="floatingName" placeholder="......."/>
            <label for="floatingName">Name</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" name="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <textarea type="text" name="message" class="form-control" id="floatingMsg" placeholder="Leave message here..." style={{ height: '150px' }}></textarea>
            <label for="floatingMsg">Message</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Send me Email Alert !
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
          <hr class="my-4"/>
          <small class="text-body-secondary">By clicking Submit Button we will Recive your Message....</small>
        </form>
      </div>
    </div>
    </>
}

export default Contact;