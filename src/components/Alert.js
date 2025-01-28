import React from 'react'

function Alert(props) {
  return (

    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{props.alert.type}</strong> : {props.alert.msg}
        
    </div> // this && tells that is first one is false then run second one otherwise dont run
   
  )
}

export default Alert
