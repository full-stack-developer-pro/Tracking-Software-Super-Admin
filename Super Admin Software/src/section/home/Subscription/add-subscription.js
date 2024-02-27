import React, { useEffect, useState, useRef } from "react";
import DataService from "../../../services/data.service";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Editor } from '@tinymce/tinymce-react';
import TagsInput from '../../../common/TagsInput'
import 'react-toastify/dist/ReactToastify.css';
 
 

const styles = {
    input: {
        opacity: '0%', // dont want to see it
        position: 'absolute' // does not mess with other elements 
    }
}
const MAX_COUNT = 5;
const AddSubscriptionSection = () => {
    const editorRefEN = useRef(null);
    const form = React.useRef();
    const [subscriptionName, setSubscriptionName] = useState("");
    const[type,setType] = useState("");
    const[plan,setPlan] = useState("");
    const[price,setPrice] = useState("");


    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const onSubscriptionName = (e) => {
        const subscriptionName = e.target.value;
        setSubscriptionName(subscriptionName);
    };
     

    const onType = (e) => {
        const type = e.target.value;
        setType(type);
    }
    
    const onPlan = (e) => {
        const plan = e.target.value;
        setPlan(plan);
    }

    const onPrice = (e) => {
        const price = e.target.value;
        setPrice(price);
    }
 

    const storedUserId = JSON.parse(localStorage.getItem("userId"));

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        const data = {
            name:subscriptionName,
            type:type,
            plan:plan,
            price:price,
        } 
            //data.append('details', editorRef.current.getContent())
            DataService.AddSubscription(data).then(
                () => {
                    navigate("/subscription-lists");
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.msg) ||
                        error.message ||
                        error.toString();
                    setLoading(false);
                    toast.error(resMessage, {
                        position: toast.POSITION.TOP_RIGHT
                  });
                }
            ); 
    };


    return (
        <div className="container-fluid">
            <ToastContainer></ToastContainer>
            <div className="row">
                <div className="d-flex w-100 justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">Add Subsciption Plan</h4>
                    {/* <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#ImportProuct">Import Venue</button> */}
                    <div class="modal fade" id="ImportProuct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">

                                   <div class="modal-body bg-yellow">
                                    <button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="card-body p-4 importSectionModal bg-white rounded-5 m-5">

                                        <div class="mb-4">
                                            <label class="form-label">Upload File</label>
                                            <div class="upload-box">
                                                <i><svg width="47" height="39" viewBox="0 0 47 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 27.5L24 19.5L16 27.5" stroke="#F4AC3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 19.5V37.5" stroke="#F4AC3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40.7799 32.28C42.7306 31.2165 44.2716 29.5337 45.1597 27.4972C46.0477 25.4607 46.2323 23.1864 45.6843 21.0334C45.1363 18.8803 43.8869 16.971 42.1333 15.6069C40.3796 14.2427 38.2216 13.5014 35.9999 13.5H33.4799C32.8745 11.1585 31.7462 8.98464 30.1798 7.14195C28.6134 5.29927 26.6496 3.83567 24.4361 2.86118C22.2226 1.8867 19.817 1.42669 17.4002 1.51573C14.9833 1.60478 12.6181 2.24057 10.4823 3.3753C8.34649 4.51003 6.49574 6.11417 5.06916 8.06713C3.64259 10.0201 2.6773 12.271 2.24588 14.6508C1.81446 17.0305 1.92813 19.477 2.57835 21.8065C3.22856 24.136 4.3984 26.2877 5.99992 28.1" stroke="#F4AC3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32 27.5L24 19.5L16 27.5" stroke="#F4AC3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </i>
                                                <div class="ms-3">
                                                    <h5>Select a file or drag and drop here</h5>
                                                    <p class="mb-0 text-secondary">JPG, PNG or PDF, file size no more than 10MB</p>
                                                </div>
                                                <div class="upload-btn-wrapper ms-auto ms-3">
                                                    <button class="btn-file">Select file</button>
                                                    <input type="file" name="myfile" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-start btn-min-width">
                                            <button class="btn btn-primary">
                                                <span>Save</span>
                                            </button></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
                <div className="row">

                    <div className="col-xxl-9 col-lg-8 ps-xxl-5 ps-md-3 ps-0">
                        <div className="card mb-5">
                            <div className="card-body p-4">

                                <div className="mb-3">
                                    <label className="form-label">Subsciption Plan Name*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        onChange={onSubscriptionName}
                                        placeholder="Subsciption Plan Name" />
                                    {/* <div className="form-text">A Lesson name is required and recommended to be unique.</div> */}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Type</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        onChange={onType}
                                        placeholder="Type" />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Subsciption Plan</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        required
                                        onChange={onPlan}
                                        placeholder="Enter Month of The Subsciption Plan" />

                                </div>

                                <div className="mb-3">
                               <label className="form-label">Price</label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    required
                                    onChange={onPrice}
                                    placeholder="Enter Price of The Subsciption Plan" />
                                    {/* <div className="form-text">A Lesson name is required and recommended to be unique.</div> */}
                            </div>


                            </div>
                        </div>
                        <div className="card mb-5">


                            <div className="d-flex justify-content-end btn-min-width">
                                <button  onClick={handleSubmit}  className="btn btn-primary" >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default AddSubscriptionSection;