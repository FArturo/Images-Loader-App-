import React, { Component } from 'react';
import ProgressBar from './progressbar' ;

const ImageDetail = (props) => {

  return(
    <li className="media list-group-item">
      <div className="media-left">
          <img src={props.image.link} alt="Images" />
      </div>
      <div className="media-body">
        <h4>
          { props.image.title }
        </h4>
        <p>{ props.image.description }</p>
        <ProgressBar ups = { props.image.ups} downs = {props.image.downs}/>
      </div>
    </li>
  );
}

export default ImageDetail;
