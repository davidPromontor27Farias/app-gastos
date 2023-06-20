import React from 'react'

const Mensaje = ({children,tipo}) => {
  return (
    <>
        <p className={`${tipo}`}>{children}</p>
    </>
  )
}

export default Mensaje
