import React, { useEffect, useState } from "react";
import "../../assets/css/Herosection.css";
import { GET_CONTACT } from "../../service/admin.service";
import { downloadAPK } from "../../Helpers/DownloadAPK";
// import Section3 from "./Section3";

const Section2 = () => {
  const [getData, setgetData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const getResponseData = async () => {
    const res = await GET_CONTACT();
    setgetData(res.data[0]);
  };
  useEffect(() => {
    getResponseData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isIPhoneXR = windowWidth === 414 || windowWidth === 896;

  const download = async () => {
    await downloadAPK();
  };

  return (
    <>
      <div className="container">
        <div className="banner-container">
          <div className="row main-contain-row">
            <div className="col-lg-6 order-1 order-lg-1">
              <div className="banner-left">
                <div className="button-sec">
                  <div className="row">
                    <div className="col-12">
                      <div
                        className={`banner-text-section ${
                          isIPhoneXR ? "d-flex flex-column" : ""
                        }`}
                      >
                        <h1 className="h1-fw-700" >Play Games</h1>
                        <h1 className="h1-fw-700">Win Money On&nbsp;</h1>
                        <h1 className="h1-fw-700" >
                          RAMA
                          <span
                            className="primary-color h1-fw-700"
                        
                          >
                            {" "}
                            BETS
                          </span>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <img
                    className="count-img"
                    src="/images/group.svg"
                    alt="Alternative Text Here"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-2 text-center">
              <img
                className="banner-img"
                src="./images/bannerlogo.png" // Reference the image directly from the public folder
                alt="Illustration of a scene with various elements"
              />
            </div>
          </div>
          <div className="download-now move-color d-flex justify-content-center align-items-center mt(-5)">
            <h1
              className="mb-0 font-400 curser-pointer"
              onClick={() => download()}
            >
              Download App
            </h1>
            <i className="fa-2x fa fa-download ms-4" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div
        className="contact-container hero-section-container"
        // style={{
        //   maxWidth: "100%",
        //   marginLeft: "auto",
        //   marginRight: "auto",
        //   paddingLeft: "calc(var(--bs-gutter-x)* .5)",
        //   paddingRight: "calc(var(--bs-gutter-x)* .5)",
        // }}
      >
        <div
          className="row d-flex align-items-center p-3 p-lg-5 margin-bottom-0px"
          // style={{ marginBottom: "0" }}
        >
          <div className="col-12 col-lg-6 text-center">
            <h4 className="color-primary">Connect with phone call</h4>
            <h1
              className="display-5 fw-bolder color-primary roboto-light font-size-2rem"
              // style={{ fontSize: "2rem" }}
            >
              +91 {getData && getData.number}
            </h1>
          </div>
          <div className="col-12 col-lg-6">
            <div className="d-flex justify-content-center align-items-center gap-3 contact-btn">
              <button className="contact-button">
                <a
                  href={`tel:${getData && getData.number}`}
                  className="text-decoration-none text-white"
                >
                  <i className="fa fa-phone me-2" aria-hidden="true"></i>Call
                  Now
                </a>
              </button>
              <button
                className="contact-button contact-btn-backgcolor"
                // style={{ backgroundColor: "rgb(37, 211, 102)" }}
              >
                <a
                  // href="https://wa.me/+919819508829"
                  href={`https://wa.me/+${getData && getData.number}`}
                  className="text-decoration-none text-white"
                >
                  <i className="fa fa-whatsapp me-2" aria-hidden="true"></i>
                  WhatsApp
                </a>
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Section2;
