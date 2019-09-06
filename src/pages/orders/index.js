
import React, { Component} from 'react'
import { Table, Divider, Alert, Button } from 'antd'
import _ from 'lodash'
import '../../style/pages.less'
import TableSystem from '../../service/api/tableService'
import FilterFun from '../../filter/index'
import DialogSystem from '../../components/mode/addData'

const columns = [{
    title: '规则名称',
    dataIndex: 'name',
  },{
    title: '描述',
    dataIndex: 'desc',
  },{
    title: '服务调用次数',
    render: (record) => (
      <span>
        {record.callNo}万
      </span>
    )
  },{
    title: '状态',
    render: (record) => (
      <p className="state-info">
        <span className={FilterFun.filterStateName(record.status)}></span>
        <span>{FilterFun.filterState(record.status)}</span> 
      </p>
    )
  },{
    title: '上次调度时间',
    dataIndex: 'createdAt',
    render: (record) => (
      <span>{FilterFun.formatterTimes(record.createdAt)}</span>
    )
  },{
    title: '操作',
    dataIndex: '',
    render: () =>(
      <div>
        <a href="javascript:;">配置</a>
        <Divider type="vertical" />
        <a href="javascript:;">订阅警报</a>
      </div>
    ) 
  },
];


class orderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      total: 0,
      tableData: [],
      useNum: 0,
      callNum: 0,
      border: false,
      selectedRowKeys: [],
      loading: false,
      metData: {}
    }
  }
  changePage = (val) => {
    this.setState({
      page: val
    })
  }
  showDialog = () => {
    console.log(DialogSystem, 'pphhcs')
    const Dialog = new DialogSystem()
    const obj = {
      title: '添加数据',
      width: 400,
    }
    Dialog.show({
      obj,
      onOk: v => {
        this.setState({ text: "hghghjggghjh" });
      }
    });
  };

  componentDidMount() {
    this.getList()
  }

  changeSelect(selectedRowKeys, selectedRows) {
    let num = 0
    _.each(selectedRows, (val) => {
      num += val.callNo
    })
    this.setState({
      useNum: selectedRows.length || 0,
      callNum: num || 0
    })
    this.setState({ selectedRowKeys });
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  }

  getList () {
    this.setState({
      loading: true
    })
    const tableSystem = new TableSystem()
    tableSystem.tableList()
      .then(({data}) => {
        this.setState({
          tableData: data.list,
          total: data.pagination.total,
          loading: false
        })
      }, (error) => {
        this.$notify.error(error.message)
      })
  }
  handleClose() {
    this.setState({
      useNum: 0,
      callNum: 0,
      selectedRowKeys: []
    })
  }

  render () {
    const { selectedRowKeys } = this.state;
    return (
      <div className="order-table" >
        <div className="search-title">
          <Button type="primary" onClick={this.showDialog}>+ 新建</Button>
        </div>
        <Alert 
        className="info-warn"
        message={
          <p>
            <span>已选择{this.state.useNum}  项</span>
            <span className="num-info">服务调用次数总计{this.state.callNum}  万</span>
            <a onClick={this.handleClose.bind(this)} href="javascript:;">清空</a>
          </p>
        }
        type="info"
        showIcon />
        <Table
          bordered={this.state.border}
          rowSelection={{
            selectedRowKeys,
            onChange: this.changeSelect.bind(this)
          }}
          loading={this.state.loading}
          columns={columns}
          rowKey={record => record.key}
          pagination={{  // 分页
            size: 'small',
            pageSize: 15,
            current: this.state.page,
            total: this.state.total,
            onChange: this.changePage,
          }}
          dataSource={this.state.tableData}
          size="small" />
      </div> 
    )
  }
}
export default orderList
