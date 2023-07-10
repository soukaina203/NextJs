'use client'
import React from 'react'

 export default  function Page(props) {


    console.log(props)
  return (
    <div>
   here is the id  {props.params.title} 
    </div>
  )
}


