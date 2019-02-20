import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function click() {}

function App() {
  const table = (
    <div>
      <table>
        <tr>
          <td class="cell" id="1">
            <img onClick={click} id="img1" alt="" />
          </td>
          <td class="cell" id="2">
            <img id="img2" />
          </td>
          <td class="cell" id="3">
            <img id="img3" />
          </td>
        </tr>
        <tr>
          <td class="cell" id="4">
            <img id="img4" />
          </td>
          <td class="cell" id="5">
            <img id="img5" />
          </td>
          <td class="cell" id="6">
            <img id="img6" />
          </td>
        </tr>
        <tr>
          <td class="cell" id="7">
            <img id="img7" />
          </td>
          <td class="cell" id="8">
            <img id="img8" />
          </td>
          <td class="cell" id="9">
            <img id="img9" />
          </td>
        </tr>
      </table>
    </div>
  );

  return table;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
