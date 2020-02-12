import React from "react";
import InstagramFeed from "./InstagramFeed";
import "./Footer.css";

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{" "}
      <a href="https://www.instagram.com/centrumkolagenu_com/">
        @centrumkolagenu_com
      </a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{" "}
          <a>SK Web Architecture</a>.
        </span>
      </div>
    </footer>
  </div>
);
