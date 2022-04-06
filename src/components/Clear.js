import React from 'react'
import './Clear.css'
export const Clear = (props) => {
  return (
      <div className='Clear-btn'  onClick={props.handleClearClick}>{props.children}</div>
  )
}
