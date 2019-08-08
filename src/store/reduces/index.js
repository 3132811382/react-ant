// reducers.js
import { MENUSTATE } from '../actions/action-types'
// 工具函数，用于组织多个reducer，并返回reducer集合
import { combineReducers } from 'redux'
// 默认值
import defaultState from '../state'

function changeMenu(state = defaultState.colSpan, action) {
  // 不同的action有不同的处理逻辑
  switch (action.type) {
    case MENUSTATE:
      return {
        colSpan: action.payload,   // 改变状态
      };
    default:
      return state
  }
}

// 导出所有reducer
export default combineReducers({changeMenu})

