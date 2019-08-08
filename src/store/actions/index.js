import { MENUSTATE } from './action-types'

export const setMenuState = (data) =>{
  return dispatch =>{
    dispatch({ type: MENUSTATE, payload: data })
  }
}