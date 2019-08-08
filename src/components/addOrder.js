import React from "react";
import ReactDOM from "react-dom";

import { Modal, Button, Input } from "antd";
import 'antd/dist/antd.css'
// 使用
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <div>
        <Button onClick={this.showDialog}>设置文案</Button>
        <div>{this.state.text}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
