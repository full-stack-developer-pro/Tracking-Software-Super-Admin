import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
const Sidebar = () => {
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const url = window.location.href;
  useEffect(() => {
    const userData = AuthService.getCurrentUser();
    setUser(userData);
  }, []);
  const toggle = (event) => {
    if (event.target.classList.contains("open")) {
      event.target.classList.remove("open");
      event.target.classList.add("close");
    } else {
      event.target.classList.add("open");
      event.target.classList.remove("close");
    }

    setIsOpen(!isOpen);
  };
  return (
    <div className="sidebar">
      <Link to={"/my-profile"} className="profile d-flex align-items-center">
        <figure className="mb-0">
          {user?.file_path ? (
            <img
              src={"https://opm-stream.onrender.com/" + user?.file_path}
              alt="profie image"
            />
          ) : (
            <img src="../assets/img/pro-img.jpg" alt="profie image" />
          )}
          <img src="../assets/img/pro-img.jpg" alt="profie image" />
        </figure>
        <div className="profile-detail ps-2">
          <h6 className="mb-1 text-dark-grey">Hello,Super Admin 🙂</h6>
          {/* <p className='text-dark-grey mb-0'>{user.first_name}</p> */}
        </div>
      </Link>

      <nav className="mt-4">
        <ul>
          <li className={url.includes("dashboard") ? "active" : ""}>
            <Link to={"/dashboard"}>
              <i>
                <svg
                  width="24"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 2.75C0.5 1.50736 1.50736 0.5 2.75 0.5L7.25 0.5C8.49264 0.5 9.5 1.50736 9.5 2.75V7.25C9.5 8.49264 8.49264 9.5 7.25 9.5H2.75C1.50736 9.5 0.5 8.49264 0.5 7.25L0.5 2.75ZM12.5 2.75C12.5 1.50736 13.5074 0.5 14.75 0.5L19.25 0.5C20.4926 0.5 21.5 1.50736 21.5 2.75V7.25C21.5 8.49264 20.4926 9.5 19.25 9.5H14.75C13.5074 9.5 12.5 8.49264 12.5 7.25V2.75ZM0.5 14.75C0.5 13.5074 1.50736 12.5 2.75 12.5H7.25C8.49264 12.5 9.5 13.5074 9.5 14.75V19.25C9.5 20.4926 8.49264 21.5 7.25 21.5H2.75C1.50736 21.5 0.5 20.4926 0.5 19.25L0.5 14.75ZM12.5 14.75C12.5 13.5074 13.5074 12.5 14.75 12.5H19.25C20.4926 12.5 21.5 13.5074 21.5 14.75V19.25C21.5 20.4926 20.4926 21.5 19.25 21.5H14.75C13.5074 21.5 12.5 20.4926 12.5 19.25V14.75Z"
                    fill="#24238A"
                    stroke="#24238A"
                  />
                </svg>
              </i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li className={url.includes("lesson") ? "active" : ""}>
            <Link to={"/CompanyList"}
              className={url.includes("lesson") ? "open" : "close"}
              onClick={(e) => toggle(e)}
            >
              <i>
                <svg 
                  width="24"
                  height="24"
                  viewBox="0 0 384 512"
                  xmlns="http://www.w3.org/2000/svg" >
                  <path
                    d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                    fill="#24238A"
                    /></svg>


              </i>
              <span>Company List</span>
          
            </Link>
     
          </li>

          <li className={url.includes("camp") ? "active" : ""}>
            <Link to={"/subscription-lists"}
              className={url.includes("camp") ? "open" : "close"}
              onClick={(e) => toggle(e)}
            >
              <i>
              <svg 
                width="24"
                height="24"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg" >
                <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
                fill="#24238A"
                /></svg>
              </i>
              <span>Subsciption Plan</span>
             
            </Link>
          
          </li>

          <li className={url.includes("lesson") ? "active" : ""}>
            <Link to={"/add-page"}
              className={url.includes("lesson") ? "open" : "close"}
              onClick={(e) => toggle(e)}
            >
              <i>

               <svg 
                width="24"
                height="24"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg" >
               <path 
                  d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zm48 96a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z"
                  fill="#24238A"
                  /></svg>

              </i>
              <span>Pages</span>
             
            </Link>
        
          </li>


        
          <li className={url.includes("artist") ? "active" : ""}>
            <Link
              className={url.includes("artist") ? "open" : "close"}
              onClick={(e) => toggle(e)}
            >
              <i>

              <svg 
                width="24"
                height="24"
                viewBox="0 0 640 512"
                xmlns="http://www.w3.org/2000/svg" >
                <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"
                 fill="#24238A"
                /></svg>

              </i>
              <span>Spot</span>
           
            </Link>
         
          </li>

        
          <li className={url.includes("static-page") ? "active" : ""}>
            <Link
              className={url.includes("static-page") ? "open" : "close"}
              onClick={(e) => toggle(e)}
            >
              <i>
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg" >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-112 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                   fill="#24238A"
                  /></svg>
              </i>
              <span>Review</span>
           
            </Link>
            <ul className="ps-4">
            <li>
                <Link to={"/static-page/top-about-us"}>All Review</Link>
              </li>
              {/* <li>
                <Link to={"/static-page/home-why-us"}>Home Why Us</Link>
              </li>
              <li>
                <Link to={"/static-page/home-fun-fact"}>Home Fun Fact</Link>
              </li>
              <li>
                <Link to={"/static-page/home-sponsors"}>Home Sponsors</Link>
              </li>
              <li>
                <Link to={"/static-page/home-book-seat"}>Home Book Seat & Newsletter</Link>
              </li> */}
              {/* <li>
                <Link to={"/static-page/about-us"}>About us</Link>
              </li>
              <li>
                <Link to={"/static-page/refund-policy"}>
                  Returns and Refunds Policy
                </Link>
              </li>
              <li>
                <Link to={"/static-page/terms-conditions"}>
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to={"/static-page/privacy-notice"}>Privacy Notice</Link>
              </li>
              <li>
                <Link to={"/static-page/contact-us"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"/static-page/cookies"}>Cookies Notice</Link>
              </li>
              <li>
                <Link to={"/static-page/become-vendor"}>Become a vendor</Link>
              </li> */}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
