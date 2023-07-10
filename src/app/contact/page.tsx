"use client"
import React, { useState } from 'react'

function Contact() {
  const [counter, setCounter] = useState(0);
  const any = (e: string) => {
    if (e === 'in') {
      setCounter(counter + 1)

    } else {
      setCounter(counter - 1)

    }
  }
  return (
    <>
hello you are in contact Page
    </>
  )
}

export default Contact
