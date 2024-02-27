import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import {HashRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./pages/login";
import Dashboard from "./pages/dashboard";
import Otp from "./pages/otp";
import ForgotPassword from "./pages/forgot-password";

 
 
 
import { RestrictedAccess } from "./private-component/RestrictedAccess";

import SignUpFields from "./pages/signup-field";
import MyProfile from "./pages/myprofile";
import EditProfile from "./pages/edit-profile";
import Notification from "./pages/notification";

import ViewReview from "./pages/review";
import ReviewDetails from "./pages/review-detail";
import SocialMediaLinks from './pages/social-media-links';
import Forgot from "./pages/Forgot";
import Resetpassword from "./pages/reset-password";
import SingleReviewDetail from "./section/home/review/view-review";
import ProductReviews from "./section/home/review/product-reviews";
import AddCompany from "./pages/add-company";
import CompanyList from "./pages/CompanyList";
import AddPage from "./pages/add-page";
import EditCompany from "./pages/edit-company";
import AllSubscriptionList from "./pages/subscription-lists";
import AddSubscription from "./pages/add-subscription";
import EditSubscription from "./pages/edit-subscription";


export default function App() {
    return (
      <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Routes>
          <Route path="/" element={<Loginpage />}/>
            <Route exact path="/Login" element={<Loginpage />} />
            <Route exact path="/otp" element={<Otp />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/forgot" element={<Forgot/>}/>
            <Route path="/reset-password/:token" element={<Resetpassword/>} /> 
            <Route element={<RestrictedAccess />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/add-company" element={<AddCompany />} />
            <Route exact path="/CompanyList" element={<CompanyList />} />
            <Route exact path="/add-page" element={<AddPage />} />
            <Route exact path="/edit-company/:id" element={<EditCompany />} />
 
            <Route exact path="/sign-up-fields" element={<SignUpFields />} />          
            <Route exact path="/my-profile" element={<MyProfile />} />          
            <Route exact path="/edit-profile/:_id" element={<MyProfile />} />          
            <Route exact path="/notification" element={<Notification />} />          
            <Route exact path="/review" element={<ViewReview />} />          
            <Route exact path="/review-details" element={<ReviewDetails />} />
            <Route exact path="/review-details" element={<ReviewDetails />} /> 
            <Route exact path="/social-media-links" element={<SocialMediaLinks />} />  
            <Route path="/view-review/:id" element={<SingleReviewDetail/>}/>
            <Route path="/product-reviews/:id" element={<ProductReviews/>}/>
            <Route exact path="/subscription-lists" element={<AllSubscriptionList/>}/>
            <Route exact path="/add-subscription" element={<AddSubscription/>}/>
            <Route exact path="/edit-subscription/:id" element={<EditSubscription/>}/>

          </Route>
        </Routes>
      </HashRouter>
    );
  }