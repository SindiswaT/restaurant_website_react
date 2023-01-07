import React from 'react';
import {images} from '../../constants'
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef"/>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
      <div className="app__chef-content_quote">
        <img src={images.quote} alt="quotation marks"/>
        <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi similique obcaecati consectetur laborum provident repellat.</p>
      </div>
      <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi placeat distinctio vel, quo neque culpa labore nihil impedit consectetur nemo dignissimos recusandae atque aperiam cumque.</p>
      </div>

    <div classname="app__chef-sign">
      <p>Kevin Luo</p>
      <p className="p__opensans">Chef & Founder</p>
      <img src={images.sign} alt="signature" />
     </div> 
    </div>
  </div>
);

export default Chef;
