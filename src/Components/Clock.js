import React from "react";
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
  state = { date: new Date() };

  //!Jdi props r kaj na thake tahole constructor a lekhar dorkar nai
  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date() };
  // }

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({ date: new Date() }); //! this.state.date = new Date() - never do that
  }

  render() {
    return (
      <h1 className="heading">
        <span className="text">
          Hello {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

export default Clock;
