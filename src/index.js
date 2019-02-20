import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var clicks = 0;
var player1 = [];
var player2 = [];
var win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 2, 3],
  [3, 5, 7],
  [1, 5, 9]
];
function click(e) {
  clicks++;
  var playermove;
  if (clicks % 2 == 0) {
    e.target.src = source("o");
    player2.push(e.target.id);
    playermove = player2;
  } else {
    e.target.src = source("x");
    player1.push(e.target.id);
    playermove = player1;
  }
  checkwin(playermove);
}

function checkwin(playermove) {
  console.log(playermove);
  var won = 0;
  for (var a = 0; a < win.length; a++) {
    won = 0;
    for (var i = 0; i < win[a].length; i++) {
      if (playermove.includes("" + win[a][i])) {
        won++;
      }
    }
    if (won == 3) {
      alert("win");
    }
  }
}

const path = {
  circle:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAPFBMVEX///8AAIDbkJf//9ZmAIC2//8AAK06kOv/28I6AIAAAJeQ2/9mtv//tq3b//8AOsKQOoAAZtb//+u2ZoCkImg1AAADfElEQVR4nO2cCZLVMAxEwz7sMNz/rtQwBfUhTrrtqC1/0e8AiWWpZcextG3GGGOMMcYYY4wxxhhjjDHGGDOFly92vMseUx8P7/cm3PLhY/YICRpuaLOyc169Zq145uuX7BG3ePzWZ8Uz37OH/S9IFse8fZM99hs+j1rxi2W0f82MZUzpVXib/AD7EWHGE7npeFzjezKdQq9+HFlOGVs5zshZISPD6jcZ4aWwIyMRX188DvhUxI7JlgjtmGqJ1I6JOtHofL4lMburM+Zk4fh1cM+UlTF4X9Jmwm6lT+g3A+qbAHnq6hBIY1b5Tb9cJuxQjgZCT4T4WIIMrLP5ZE2RBheZsYBUudmQZi5KsHg945wizFzUAJiZpDwr1DvjEC4iKEtkLmEcwkY2Y4nMJYRDeIUysyJyCfHqnn0rsYcWuYTIml25n3CwZC0horpvNSYeKFlLcCj0fhDFP5ECR0K3NgWPxOBA6JcmTh+C2MJxMLBfhS4RxJbknXh2wmMLR9bQBwT8vAmPLRzOQzkfrk3ha6LojaL5OQFKZPDTFD43WCRYIoMzBz0dLBIYAqOxLHvwATBPDk8cylvBKwmMgOFQhiKJVbvuddDXsWrXBQAUSehJHUxa45KEjw5NW3DaLrwNOTs0bSn9j+QXaohSkciQ0PwLDbmQI2Fmj8y/ypctZcgV9yu9vUMZx1NXRKUhMCPONORKirQhI6QaErnZsiEE/48hZTTidaRBmZW9zF6rzO63zPdImS/EMt/sSkOmnqIID5/mnmsJp23uSWOds98yp/Fw3oYDYPL/kTJ/rPAP8cEI0P0KO6DKX13Vf3bZ3+JDytx8wCK5k7somttB2M/xN8/K3NfCsux/acoNOuICYrdLUu401rllShTz9AVC1r1f5iZ2VyRk3cRmZvA+7sYzU8i/OrFaoU79SJmKnjo1VlzhHVY8V0eurNeNqUPkqna1FdRkTf6ZU9iyfnHZMVure2QK3Z1A3UKso3q6MZSFqqc7Gz6sW89ep8NAYEutY+Z0Q6rShUNvSZUOLzM7OlXpHVSnm1Od/lp1Op5pcldOi8MqXQG3Mn0at1ihJHdmDdt4pbcwrtJddouIryX6/T5xcXWcvgaeMO6VZbzxhyHZp0u8Sa/ul1D4EbRf1vTF30y9NzqBhnPuwQ3GGGOMMcYYY4wxxhhjjDHGGLMSPwFZaTkA+mx27gAAAABJRU5ErkJggg==",
  cross:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAQlBMVEX///8AAID//+uQOoDbkJcAAJf/28I6AIA6kOuQ2/+2///b//8AOsIAZtYAAK22ZoBmtv//tq3//9ZmAIBmZq2QkK0MLKmuAAAD5ElEQVR4nO2c2ULdMAxE6UJLF1q6/f+vlotbdLlANJJlax7mPF+yOKPjkMS6uhJCCCGEEEIIIYQQQgghhBBCCCFYePvujc9dfLvf3Y1ef6o9kw8f/RP59jm61R9LRueY98AluQ1u8+ev8k0C+CkID5+/ya9f6k8EGL5guPxgVRcIut/YCAJld7PiPLBw4bsGRLigQNBdB8Lg2yNuQRTEwWi4gG2Vm9dAHIyFC7i6iwoE3T0YLn9IVpjXQByMHEGXeSNHgGQCGI+FBTIAHOwPpr+RVeY1KsLlX9Z15jUQBx+Hyx+L1QUyABx8fCB+sFaa10AcfBQuP1hrzWvMhcv/6x0FMpgJF3A9l5vXABz8Wjz8QVhvXgNx8Mvh8oO1q0AGwAT/Yrj8YO0xr5EMlx+sPeY1EAc/Pyb/Qu4skAHg4Gcp8Utrn3kNwMGXh+XmcXeBPICE62lQ/GDtLpAB4uC70O/3mtcAHHweLjdYHQUCHtp5uPya2nhrckEkXL7l9pvXwMPlq6GrQAaAg2+xH7aY10AcfAqXH6we8xrABH8fLv98OwtkAIXL/VGfeQ3Awb/dX/SZ10Ac7NFdIAPkKeoxveY1kDdZRzSb14C+JjiAoUAGyIOu1+k3r4G8yXoNBvM+MhEumgIZ5B3MYV4j62CmAhnkHExVIINcuHjMa2TCxVYgg7iDWW5NLgg7mMy8RnSCZyyQQSxcfOY1Ig4mNK8RcDBtgQxwB3Oa10DDRWpeA3QwdYEMQAfzqvc/YL3TXxJ4emeeRU7gcyK3tgJ3KdQTSei+kdnAsX8TecMV/N+KNlzh/3ZJw5V4uMXp4MzjRsYJPvUAmHCCTz415QtX9iUJW7jSr63IwjXxIpHLwTNv35gm+JkXPUwT/NyrN55wzb4MpQnXVLBOkIRr/oMBDge75r3+458JwwTvmvcGkXP/BO8G695JwHTZHi7XvA+FDJRRc7h88w61AuHqdbBr3n+THRCuVge7kXk8OiBcjRO8P86WF+pwuQd3NsiZ9Sa7wIN1AriRaQpX8KPk+HqTTYS/dkdu9jsm+PjX7onFTBtIfO1OGa7UOiPGcOUWsPGFK7mAbXYpfDnpBWzzfRZKmVg6PN1noZSJpcNU4ZpawEYULn9QD83DEy7/hvxwLkDCtcXB02vSkXBtmOAL1qQjTyaXT/AV3UAowlXSDYQgXEVtZtrDVdVmpra/YIKyBl+V/QUTFDb4qusvmKCyc1xruEo7xzWGq7hnZ1u4qnt2rupOXbDf4By2pju1y4JmsCu6U7usaMPdEa41bbgbwrWoDXdLuIQQQgghhBBCCCGEEEIIIYQQQgjxF9zgNE7bMJISAAAAAElFTkSuQmCC"
};

function source(param) {
  switch (param) {
    case "":
      return "";
      break;
    case "x":
      return path.cross;
      break;
    case "o":
      return path.circle;
      break;
  }
}

function App() {
  const table = (
    <div>
      <table>
        <tr>
          <td class="cell">
            <img onClick={click} src={source} id="1" alt="" />
          </td>
          <td className="cell">
            <img onClick={click} src={source} id="2" />
          </td>
          <td className="cell">
            <img onClick={click} src={source} id="3" />
          </td>
        </tr>
        <tr>
          <td className="cell">
            <img onClick={click} src={source} id="4" />
          </td>
          <td className="cell">
            <img onClick={click} src={source} id="5" />
          </td>
          <td className="cell">
            <img onClick={click} src={source} id="6" />
          </td>
        </tr>
        <tr>
          <td className="cell">
            <img onClick={click} src={source} id="7" />
          </td>
          <td className="cell">
            <img onClick={click} src={source} id="8" />
          </td>
          <td className="cell">
            <img onClick={click} src={source} id="9" />
          </td>
        </tr>
      </table>
    </div>
  );

  return table;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
