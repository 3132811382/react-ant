import TABLESTATE from '../interface/enum'
import moment from 'moment'

class FilterFun {
  static filterState =((sate)=>{
    let name = null
    switch(sate){
      case TABLESTATE.CLOSE:
        name = '关闭'
        break
      case TABLESTATE.PENDING:
        name = '进行中'
        break
      case TABLESTATE.ONLINE:
        name = '已上线'
        break
      case TABLESTATE.SINGULAR:
        name = '异常'
        break
      default:
        break
    }
    return name
  });
  static filterStateName =((sate)=>{
    let name = null
    switch(sate){
      case TABLESTATE.CLOSE:
        name = 'font-icon font-gray'
        break
      case TABLESTATE.PENDING:
        name = 'font-icon font-blue'
        break
      case TABLESTATE.ONLINE:
        name = 'font-icon font-green'
        break
      case TABLESTATE.SINGULAR:
        name = 'font-icon font-red'
        break
      default:
        break
    }
    return name
  })
  static formatterTimes =((val)=>{
    return moment(val).format('YYYY-MM-DD HH:mm:ss'); 
  })
}

export default FilterFun
