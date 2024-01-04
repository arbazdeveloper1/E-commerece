import React from "react";
import "../assets/Style/Home.css";
import cloth_Img from "../assets/Images/cloth_img.jpg";
import second_second_img from "../assets/Images/image_3.jpg";
import groups from '../assets/Images/groups.jpg';
import mood from '../assets/Images/mood.jpg';
import quick_reorder from '../assets/Images/quick_reorder.jpg'

export default function Landing_page() {
  
  return (
    <>
      {/* ==============================   section no 1 =============================== */}
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12" id="first_div">
            <div className="mt-5">
              <h1>
                From Local Cotton<br></br> to Global Imports
              </h1>
              <p className="tag_line mt-4">
                Discover the perfect blend of comfort and style with our
                extensive collection of premium cotton and imported fabrics,
                crafted to elevate your creations. Explore quality, diversity,
                and endless possibilities in every weave.
              </p>
              <div className="shop">
                <button className="btn btn-danger">
                  Shop Now<i class="fa-solid fa-bag-shopping px-3"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={cloth_Img} alt="" className="my_img" />
          </div>
        </div>
      </div>
      {/* ==============================   section no 1  closed here =============================== */}

      {/* ====================================   section no 2 ============================================ */}
      <div className="container-fluid luxury_section">
        <div className="row">
          <div className="col-lg-6 py-5 d-flex justify-content-center">
            <img src={second_second_img} alt="" className="imgg" />
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="mt-5">
              <h1>
                Dive into Luxury,<br></br>Book your Home Visit
              </h1>
              <p className="tag_line mt-4">
                Start on a journey of luxury by scheduling a home tour with us.
                Experience the lavish touch of our premium fabrics in the
                comfort of your space. Immerse yourself in luxury as we bring
                the showroom experience directly to your doorstep.
              </p>
              <div className="shop d-flex justify-content-end">
                <button className="btn btn-danger">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================================   section no 2 closed ============================================ */}


      {/* =============================================  section no 3 =================================================== */}

      <div className="container-fluid">
        <div className="row d-flex justify-content-center">

          <div className="col-lg-4 favstore_community">
            <div className="circle-container">
            <div className="circle">
            <img src={groups} alt="" height={58}/>
            </div>       
            <span className="image-text">10k+</span>
            <span className="text_line">Favstore community</span>
            </div>
          </div>
  


          <div className="col-lg-4 happy_customer">
            <div className="circle-container">
            <div className="circle">
            <img src={mood} alt="" />
            </div>
            <span className="image-text">1760+</span>
            <span className="text_line">Happy customers</span>
            </div>
          </div>

          <div className="col-lg-4 favstore_community">
            <div className="circle-container">
            <div className="circle">
            <img src={quick_reorder} alt="" />
            </div>
            <span className="image-text">38k+</span>
            <span className="text_line">Meter deliverd</span>
            </div>
          </div>


        </div>
      </div>
      {/* =============================================  section no 3  closed =================================================== */}


{/* =====================================================  seciton 4 ================================================= */}
<div className="container-fluid"></div>

    </>
  );
}
