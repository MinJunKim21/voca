import React from 'react'
import { Link } from 'react-router-dom'

const EmptyPage = () => {
  return (
    <div>
      <h2>404 wrong page</h2>
      <Link to='/'>go back</Link>
    </div>
  )
}

export default EmptyPage