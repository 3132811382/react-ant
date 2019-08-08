
import React, { Component} from 'react'
import { Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
const SubMenu = Menu.SubMenu
const mapStateToProps = (state) => {
  return {
    colSpan: state.changeMenu.colSpan
  }
} 

class SildeMenu extends Component {
  constructor(props) {
    super(props)
  }
  
  changeSildeMenu (val) {
    this.props.history.push(val.key)
  }
  render () {
    const { colSpan} = this.props
    return (
      <div className="silde-Menu" style={{ width: colSpan ? 80: 160 }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.props.history.location.pathname]}
          mode="inline"
          theme="dark"
          inlineCollapsed={colSpan}
          onSelect={this.changeSildeMenu.bind(this)}>
          <Menu.Item >
          </Menu.Item>
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>统计</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>控制台</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>业务管理</span>
              </span>
            }>
            <Menu.Item key="5">账户</Menu.Item>
            <Menu.Item key="/order_list">订单</Menu.Item>
            <Menu.Item key="7">产品</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
export default connect(mapStateToProps)(withRouter(SildeMenu))