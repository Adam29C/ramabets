import React, { useEffect, useState } from "react";
import star from "../../../images/star.png";
import Accordion from "react-bootstrap/Accordion";

const FandQSection = () => {
  // .............
  const [isOpen, setIsOpen] = useState({
    ramabet: false,
    games: false,
    license: false,
    depositWithdrawal: false,
    whyChoose: false,
  });

  const toggleAccordion = (section) => {
    setIsOpen((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      newState[section] = !prevState[section];
      return newState;
    });
  };

  return (
    <div>
      <div className="heding-sec m-4 d-flex text-center justify-content-center align-items-center my-5">
        <img src={star} alt="" />
        <h1 className="mb-0 ms-2 me-2 font-700">Frequently Asked Questions</h1>
        <img src={star} alt="" />
      </div>
      <div className="accordion-container container">
        <div className="accordion-container">
          <div className="accordion-section">
            <div
              className="d-flex align-items-center justify-content-between accordion-header"
              onClick={() => toggleAccordion("ramabet")}
            >
              <div>What is RAMABETS ?</div>
              <div className="collapese-icon">
                <i
                  className={`fa ${
                    isOpen.ramabet ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                ></i>
              </div>
            </div>
            {isOpen.ramabet && (
              <div className="description-text">
                <br />
                RAMABETS Is A Satta Matka Gamming App Where You Can Play Games
                And Win Jackpot.
              </div>
            )}
          </div>

          {/* Repeat similar structure for other sections */}
        </div>
        <div>
          <div>
            <div className="accordion-section">
              <div
                className="d-flex align-items-center justify-content-between accordion-header"
                onClick={() => toggleAccordion("games")}
              >
                <div className="headin-text">
                  What games are available on RAMABETS ?
                </div>
                <div className="collapese-icon">
                  <i
                    className={`fa ${
                      isOpen.games ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                  ></i>
                </div>
              </div>

              {isOpen.games && (
                <div className="description-text">
                  <br />
                  Popular Satta Matka Games Like Kalyan, Sridevi, Shree day,
                  Milan, Time Bazar & Rajdhani, Main bazar etc..
                </div>
              )}
            </div> 

            <div className="accordion-section">
              <div
                className="d-flex align-items-center justify-content-between accordion-header"
                onClick={() => toggleAccordion("license")}
              >
                <div className="headin-text">Does RAMABETS have License ?</div>
                <div className="collapese-icon">
                  <i
                    className={`fa ${
                      isOpen.license ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                  ></i>
                </div>
              </div>
              {isOpen.license && (
                <div className="description-text">
                  <br />
                  Yes, RAMABETS Have Sub License In Malta. All Rights That
                  Allows To Operate Software Worldwide.
                </div>
              )}
            </div>

            <div className="accordion-section">
              <div
                className="d-flex align-items-center justify-content-between accordion-header"
                onClick={() => toggleAccordion("depositWithdrawal")}
              >
                <div className="headin-text">
                  What is minimum Deposit and Withdrawal Amount ?
                </div>
                <div className="collapese-icon">
                  <i
                    className={`fa ${
                      isOpen.depositWithdrawal
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    }`}
                  ></i>
                </div>
              </div>
              {isOpen.depositWithdrawal && (
                <div className="description-text">
                  <br />
                  In RAMABETS, We Allow Minimum of 100.00 Rs/- Deposit and
                  500.00 Rs/- Withdrawals.
                </div>
              )}
            </div>

            <div className="accordion-section">
              <div
                className="d-flex align-items-center justify-content-between accordion-header"
                onClick={() => toggleAccordion("whyChoose")}
              >
                <div className="headin-text">
                  Why to Choose RAMABETS Among Other Providers ?
                </div>
                <div className="collapese-icon">
                  <i
                    className={`fa ${
                      isOpen.whyChoose ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                  ></i>
                </div>
              </div>
              {isOpen.whyChoose && (
                <div className="description-text">
                  <br />
                RAMABETS Is The Most Trusted Gaming Provider Worldwide.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <Accordion
        className="accordion-container  container"
        defaultActiveKey="0"
      >
        <Accordion.Item style={{ background: "#f9e3c3" }} eventKey="0">
          <Accordion.Header style={{ background: "#f9e3c3" }}>
            What is RAMABETS ?
          </Accordion.Header>
          
          <Accordion.Body style={{ background: "#f9e3c3" }}>
            RAMABETS Is A Satta Matka Gamming App Where You Can Play Games And
            Win Jackpot.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item style={{ background: "#f9e3c3" }} eventKey="1">
          <Accordion.Header style={{ background: "#f9e3c3" }}>
            What games are available on RAMABETS ?
          </Accordion.Header>
          <Accordion.Body>
            Popular Satta Matka Games Like Kalyan, Sridevi, Shree day, Milan,
            Time Bazar & Rajdhani, Main bazar etc..
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item style={{ background: "#f9e3c3" }} eventKey="2">
          <Accordion.Header style={{ background: "#f9e3c3" }}>
            Does RAMABETS have License ?
          </Accordion.Header>
          <Accordion.Body>
            Yes, RAMABETS Have Sub License In Malta. All Rights That Allows To
            Operate Software Worldwide.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item style={{ background: "#f9e3c3" }} eventKey="4">
          <Accordion.Header style={{ background: "#f9e3c3" }}>
            What is minimum Deposit and Withdrawal Amount ?
          </Accordion.Header>
          <Accordion.Body>
            In RAMABETS, We Allow Minimum of 100.00 Rs/- Deposit and 500.00 Rs/-
            Withdrawals.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item style={{ background: "#f9e3c3" }} eventKey="5">
          <Accordion.Header style={{ background: "#f9e3c3" }}>
            Why to Choose RAMABETS Among Other Providers ?
          </Accordion.Header>
          <Accordion.Body>
            RAMABETS Is The Most Trusted Gaming Provider Worldwide.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> */}
    </div>
  );
};

export default FandQSection;
