import React from "react";
import "./Footer.css";

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{" "}
      <a href="https://www.instagram.com/centrumkolagenu_com/">
        @centrumkolagenu_com
      </a>
      <a href="https://www.facebook.com/centrumkolagenucom/">
        @centrumkolagenucom
      </a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved for Centrum Kolagenu Naturalnego Barbara Baszak. Crafted by{" "}
          <a>SK Web Architecture</a>.
        </span>
      </div>
    </footer>
  </div>
);
