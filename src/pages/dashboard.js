import React, { Component } from 'react'
import { Avatar, Divider, Statistic, Card } from 'antd'
import '../style/dashbord.less'
import TableSystem from '../service/api/tableService'
import FilterFun from '../filter/index'

const { Meta } = Card;

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersInfo: {},
      listInfo: []
    }
  }
  componentDidMount() {
    this.getUser();
  }

  getUser() {
    const tableSystem = new TableSystem()
    tableSystem.userInfos()
      .then(({data}) => {
        this.setState({
          usersInfo: data,
          listInfo: data.notice
        })
      }, (error) => {
        this.$notify.error(error.message)
      })
  }
  render() {
    return (
      <div className="dashboard-list">
        <div className="dashboard-header">
          <div className="header-left">
            <Avatar size={64} src={this.state.usersInfo.avatar}></Avatar>
            <div className="avatar-info">
              <p>早安，{this.state.usersInfo.name}，祝你开心每一天！</p>
              <div>
              {this.state.usersInfo.title}
              <Divider type="vertical" />
              {this.state.usersInfo.group}
              </div>
            </div>
          </div>
          <div className="header-right">
            <Statistic title="项目数" value={56}></Statistic>
            <Statistic className="px-info" title="团队内排名" value={'8/24'}></Statistic>
            <Statistic title="项目访问" value={'2,223'}></Statistic>
          </div>
        </div>
        <div className="main-lists">
          <div className="main-left">
            <div className="card-lists">
            <Card title="进行中的项目" extra={<a href="#">全部项目</a>}>
              {
              this.state.listInfo.map((list) => {
                  return (
                    <Card.Grid key={list.id} className="card-box-info">
                      <Meta
                        avatar={
                          <Avatar src={list.logo} />
                        }
                        title={list.title}
                        description={<span>{list.description}</span>}>
                      </Meta>
                      <div className="card-foot">
                        <span>{list.member}</span>
                        <span>{FilterFun.initTimes(list.updatedAt)}</span>
                      </div>
                    </Card.Grid>
                  )
                })
              }
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;