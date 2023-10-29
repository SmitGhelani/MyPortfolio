import React from 'react'
import './details.css'

const Details = () => {
  return (
    <div>
        <img src='./my_img.jpg' alt='profile-pic' className='profile-pic' /><br />
        <label>Smit Ghelani</label><br />
        <i className="fa-solid fa-envelope"></i><label>ghelanismit4@gmail.com</label><br />
        <i className="fa-solid fa-phone"></i><label>+91-6355286783</label>
        <a href='https://www.linkedin.com/in/smit-ghelani-340296174/'><i class="fa-brands fa-linkedin"></i></a>
        <a href='https://github.com/SmitGhelani'><i class="fa-brands fa-github"></i></a>
    </div>
  )
}

export default Details;