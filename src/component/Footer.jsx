import React from 'react'
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
<div className="text-center text-lg-start bg-body-tertiary text-muted">
  <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="" className="me-4 text-reset">
        <FaFacebookF />
      </a>
      <a href="" className="me-4 text-reset">
        <FaTwitter />
      </a>
      <a href="" className="me-4 text-reset">
        <FaGoogle />
      </a>
      <a href="" className="me-4 text-reset">
        <FaInstagram />
      </a>
      <a href="" className="me-4 text-reset">
        <FaLinkedin />
      </a>
      <a href="" className="me-4 text-reset">
        <FaGithub />
      </a>
    </div>
  </div>

  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2024 Copyright:
    <a className="text-reset fw-bold" href="https://github.com/teddwill123/News-App"> TEDDY.com</a>
  </div>
</div>
  )
}

export default Footer
