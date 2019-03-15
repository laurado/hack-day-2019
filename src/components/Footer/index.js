import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = ({ author, title }) => (
  <div className="footer">
    <div className="container text-center">
      <hr className="border-primary" />
      <p>{title}: Exploring gatsby.js by Lurrer and Dern</p>
    </div>
  </div>
)

export default Footer
