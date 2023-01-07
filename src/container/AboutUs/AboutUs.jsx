import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G letter"/>
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon"/>
        <p className="p__opensans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum voluptatem delectus sunt rem, deleniti animi quos fuga expedita beatae! Commodi excepturi voluptate expedita omnis suscipit earum voluptatum fugit fuga sequi, recusandae eius maxime nihil ipsum?</p>
        <button type='button' className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon"/>
        <p className="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente tenetur molestias praesentium recusandae numquam est odio ad possimus laboriosam, inventore maxime sint mollitia aliquam, aspernatur dolorem nisi dolorum ipsam optio officiis totam neque facere distinctio. Natus, magni laborum. Voluptatibus, quas.</p>
        <button type='button' className="custom__button">Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
