import React from "react";
import ReactDOM from "react-dom";
// Functional Component

// function clock({ locales }) {
//   return (
//     <h1 className="heading">
//       <span className="text">
//         Hello {new Date().toLocaleTimeString(locales)}</span>
//     </h1>
//   );
// }

// ReactDOM.render(<clock locales="bn-BD" />, document.getElementById("root"));

//Class components
// !Class a kono property send korle seta props r moddhe thake.Oita access korar jonno this.props.property name diye access kora jai
//! Class r vitore props k change kora jabe na korle seta render function r moddhe infinite loop a porbe barbar render hobe.Props sob somoy baire theke change hobe
class Clock extends React.Component {
  render() {
    return (
      <h1 className="heading">
        <span className="text">
          Hello - {this.props.children}{" "}
          {new Date().toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

ReactDOM.render(
  <Clock locale="bn-BD">Pallab</Clock>,
  document.getElementById("root")
);
