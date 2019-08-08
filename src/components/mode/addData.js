import React from "react";
import ReactDOM from "react-dom";
import { Modal, Form, Input } from "antd";
import "antd/dist/antd.css";

class DialogCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  show (params) {
    let container = document.createElement("div");
    document.body.appendChild(container);
    this.metData = params.obj
    function closeHandle() {
      ReactDOM.unmountComponentAtNode(container);
      document.body.removeChild(container);
      container = null;
    }

    ReactDOM.render(
      <DialogCustom {...params} metData={params}   onClose={closeHandle}>
      </DialogCustom>,
      container
    );
  };
  

  onChange = e => {
    this.setState({ text: e.target.value });
  };


  handleOk = () => {
    this.props.onOk(this.state.text);
    this.props.onClose();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { keys, names } = values;
        console.log('Received values of form: ', values);
        console.log('Merged values:', keys.map(key => names[key]));
      }
    });
  }

  render() {
    const { children, onClose, metData, ...others } = this.props;
    return (
      <Modal
        {...others}
        visible={true}
        metData={metData}
        width={metData.obj.width}
        title={metData.obj.title}
        onOk={this.handleOk}
        onCancel={onClose}
        okText="确认"
        cancelText="取消">
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
          <Form.Item label="规则名称">
            <Input  placeholder="请输入"/>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' });
// export default  DialogCustom;
export {
  DialogCustom,
  WrappedAdvancedSearchForm,
}