import React from 'react';
import "./hero.css"
import img1 from "../../imgs/list1.png";
import img2 from "../../imgs/list2.png";
import img3 from "../../imgs/list3.png";
import img1Dark from "../../imgs/list1_dark.png";
import img2Dark from "../../imgs/list2_dark.png";
import img3Dark from "../../imgs/list3_dark.png";

export default function Hero() {
  return (
    <div className="px-4 my-3 text-center">
        <h1 className="col-lg-6 mx-auto">Flow</h1>
        <h2 className="col-lg-6 mx-auto">Meditating has never been easier.</h2>
        <br />
        <h5 className="col-lg-6 mx-auto">Thanks to Flow you can set up the perfect meditation session in 3 simple steps.</h5>
        <br />
        <div className="col-sm-4 mx-auto d-flex justify-content-center">
            <div className="d-flex flex-column">
                <div className="list-group-item d-flex gap-3">
                    <img src={img1} className="listImg listImgLight" alt="1"/>
                    <img src={img1Dark} className="listImg listImgDark" alt="1"/>
                    <p className="align-middle">Choose your background music.</p>
                </div>
                <div className="list-group-item d-flex gap-3">
                    <img src={img2} className="listImg listImgLight" alt="2"/>
                    <img src={img2Dark} className="listImg listImgDark" alt="2"/>
                    <p className="align-middle">Set the timer.</p>
                </div>
                <div className="list-group-item d-flex gap-3">
                    <img src={img3} className="listImg listImgLight" alt="3"/>
                    <img src={img3Dark} className="listImg listImgDark" alt="3"/>
                    <p className="align-middle">Enjoy your meditation!</p>
                </div>
            </div>
        </div>
    </div>
  )
}