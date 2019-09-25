import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidMount() {
    console.log("My component was rendered to the screen");
  }

  componentDidUpdate() {
    console.log("My component was just updated - it rerendered!");
  }

  render() {
    return (
      <div>
        {this.state.lat
          ? `Latitude: ${this.state.lat}`
          : this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
