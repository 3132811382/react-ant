import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import '../style/login.less'

class LoginSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.history.push('/homepage/order')
      }
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-banner">
        <div className="login-form">
          <h3>问卷理系统</h3>
        <Form onSubmit={this.handleSubmit} >
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '输入用户名' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '输入密码' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: false,
            })(<Checkbox>记住密码</Checkbox>)}
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
             登录
            </Button>
          </Form.Item>
        </Form>
        </div>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(LoginSystem);

export default WrappedNormalLoginForm;