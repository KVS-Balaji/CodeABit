import "./App.css";
import { FaArrowCircleRight } from "react-icons/fa";
import twitter from "./assets/twitter.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import graph from "./assets/graph.png";

function App() {
  return (
    <div id="appcontainer">
      <div id="header">
        <div id="buttondiv">
          <div className="headerbtns">
            <p>Lorem</p> <FaArrowCircleRight />
          </div>
          <div className="headerbtns">
            <p>Lorem</p> <FaArrowCircleRight color="white" />
          </div>
          <div className="headerbtns">
            <p>Lorem</p> <FaArrowCircleRight color="white" />
          </div>
        </div>
        <div id="icondiv">
          <img src={facebook} alt="facebookimg" />
          <img src={twitter} alt="twitterimg" />
          <img src={instagram} alt="instagramimg" />
        </div>
      </div>
      <div id="bodydiv">
        <div id="graybox">
          <div id="leftcontent">
            <div id="boxheader">
              <p>
                <span id="span1">Lorem Ipsum</span> <br />
              </p>
              <div id="dash"></div>
            </div>
            <div id="lorembutton" className="headerbtns">
              <p>Lorem</p> <FaArrowCircleRight />
            </div>
          </div>
          <div id="rightcontent">
            <div id="circle"></div>
            <div id="loremtextbox">Lorem Ipsum</div>
          </div>
        </div>
        <div id="belowgray">
          <div id="lorembuttons">
            <div className="headerbtns btn1" id="belowgraybtn">
              <p>Lorem</p>
            </div>
            <div className="headerbtns" id="btn2">
              <p>Lorem</p>
            </div>
            <div className="headerbtns" id="btn3">
              <p>Lorem</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            voluptate optio ratione
            <br /> maiores necessitatibus, quam natus harum earum id distinctio
            ipsa aliquam
          </p>
        </div>
        <div id="cards">
          <div className="card" id="card1">
            <div id="heading">
              <p>Lorem</p>
              <FaArrowCircleRight />
            </div>
            <div id="whitebox"></div>
            <div id="textrandom">
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="card" id="card2">
            <div id="headingcard1">
              <p>Lorem</p>
              <FaArrowCircleRight />
            </div>
            <div id="bottomtextcard2">
              <p style={{ fontSize: "40px" }}>Lorem Ipsum</p>
              <p style={{ fontWeight: "700", fontSize: "70px" }}>38.2</p>
            </div>
          </div>
          <div className="card" id="card3">
            <div id="headingcard1">
              <p>Lorem</p>
              <FaArrowCircleRight />
            </div>
            <div id="bottomtextcard3">
              <p style={{ fontSize: "40px" }}>Lorem Ipsum</p>
              <img src={graph} alt="graph" style={{ height: "100px" }} />
            </div>
          </div>
        </div>
        <div id="footer">
          <p>Lorem</p>
          <div id="middle">
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
          <p>Lorem Ipsum -----------&gt; Lorem</p>
        </div>
      </div>
    </div>
  );
}

export default App;
