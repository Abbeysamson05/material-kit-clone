import "./secondPage.css";
import "../index";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function SecondPageSecond() {
  return (
    <div className="container first-grid ">
      <div className="bg-primary first-grid__1">
        <h1 className=" text-light second-h1">Feel the Material Kits</h1>
        <p className="text-light second-h4">
          All the MUI Contents that you need in a development have been redesign
          with a new look
        </p>
      </div>
      <div className="second-grid">
        <div>
          <ion-icon name="copy-outline"></ion-icon>
          <h2>Full Documentation</h2>
          <p>
            Built by developers for developers. Check the foundation and you
            will find everything inside our documentation.
          </p>
        </div>
        <div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-currency-exchange" viewBox="0 0 16 16">
  <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
</svg> */}
          <ion-icon name="logo-usd" className="color-dollar"></ion-icon>
          <h2>MUI Ready</h2>
          <p>
            The world's most popular react components library for building user
            interfaces.
          </p>
        </div>
        <div>
          <ion-icon name="desktop-outline"></ion-icon>
          <h2>Save Time & Money</h2>
          <p>
            Creating your design from scratch with dedicated designers can be
            very expensive. Start with our Design System.
          </p>
        </div>
        <div>
          <ion-icon name="square-outline"></ion-icon>
          <h2>Fully Responsive</h2>
          <p>
            Regardless of the screen size, the website content will naturally
            fit the given resolution.
          </p>
        </div>
      </div>
    </div>
  );
}
