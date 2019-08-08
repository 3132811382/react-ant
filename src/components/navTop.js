
import React, { Component} from 'react'
import { Icon, Divider } from 'antd'
import headUrl from '../assets/img/icon.png'
import '../style/header.css'
import { setMenuState } from '../store/actions'
import { connect } from 'react-redux' 

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  return {
    colSpan: state.changeMenu.colSpan
  }
}
const mapDispatchToProps = (dispatch) => ({
  changeMenu: (colSpan) => {
    dispatch(setMenuState(colSpan))  // 返回期望注入到展示组件的 props 中的回调方法
  }
})
class NavTopMenu extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    const { colSpan, changeMenu } = this.props
    return (
      <div className="nav-top"  >
        <div className="left-logo">
          <Icon type="menu-fold" onClick={()=>changeMenu(!colSpan)} />
        </div>
        <div className="right-top">
          <img src={headUrl} alt="" />
            管理员
          <Divider type="vertical" />
          <span>退出</span> 
        </div>
      </div> 
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavTopMenu)
