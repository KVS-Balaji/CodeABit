import "./App.css";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

function App() {
  return (
    <div id="appcontainer">
      <div id="leftcontainer">
        <div id="blurredbg"></div>
        <div id="iconsheader">
          <FaFacebookSquare />
          <FaInstagram />
        </div>
        <div id="woodtext">
          <p>Wood</p>
        </div>
        <div id="randomtext">
          <div id="circlediv">
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles"></div>
          </div>
          <p>
            Explore Land
            <br />
            <span>
              Lorem ipsum dolor sit, <br />
              amet consectetur
            </span>
          </p>
        </div>
        <div id="seeall">
          <p>See All</p>
        </div>
      </div>
      <div id="rightcontainer">
        <div id="rightheader">
          <p className="loremtext">Lorem</p>
          <p className="loremtext">Lorem</p>
          <p className="loremtext">Lorem</p>
          <p className="loremtext">Lorem</p>
        </div>
        <div id="landtext">
          <p>land</p>
        </div>
        <div id="adventuretext">
          <p>ADVENTURE</p>
        </div>
      </div>
    </div>
  );
}

export default App;
