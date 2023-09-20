import React, { useState } from "react";
import "../CSS/ViewNews.scss";
import Navbar from "./Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";


const TemplateSelection = () => {
    const navigate = useNavigate();

    //   const item = newsData?.state.item;
    // console.log(item);

    const [style, setStyle] = useState("navbarbox");

    const changeStyle = () => {
        setStyle((prev) => {
            if (prev === 'navbarbox') {
                setStyle('navbarbox2')
            } else setStyle('navbarbox')
        });
    }

    return (
        <> <div className="maindashboard">
            <div className="navbarbox">
                <Navbar />
            </div>
            <div className="parentContainernew">
                <h1 className="bg-blue">
                    <div className="dashwithfav" style={{ display: 'flex' }}>
                        <div>
                            <span onClick={() => navigate(-1)} className="pointer rightShift">
                                <HiOutlineArrowSmallLeft className="rightShift" />
                            </span>
                        </div>
                        <div style={{ marginLeft: '10px', marginTop: '2px' }}>
                            <p>Template Selection</p>
                        </div>
                        <div className="onclick" onClick={changeStyle}>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </h1>
                <h5 className="px-3" style={{marginTop:'15px'}}>
                    To use any of the available Template in your website , just simply
                    update the record in your domain DNS configuration with the url
                    provided in the Template below.
                </h5>
                <div className="container" style={{marginTop:'15px'}}>
                    <div className="row" style={{marginTop:'15px'}}>
                        <div className="d-flex px-3 col">
                            <div className="card " style={{ width: "27.5rem" }}>
                                <img
                                    className="card-img-top"
                                    src={require("../Images/template_website_1.png")}
                                    alt="Card image cap"
                                    width={"100%"}
                                    height={"200px"}
                                />
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-center font-weight-bold">
                                        Template 1
                                    </h5>
                                    <a className="card-text d-flex justify-content-center">
                                        {`http://174.138.101.222:7000/64b666b58baee257c737615e`}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex px-3 col">
                            <div className="card " style={{ width: "27.5rem" }}>
                                <img
                                    className="card-img-top"
                                    src={require("../Images/template_website_2.PNG")}
                                    alt="Card image cap"
                                    width={"100%"}
                                    height={"200px"}
                                />
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-center font-weight-bold">
                                        Template 2
                                    </h5>
                                    <a className="card-text d-flex justify-content-center">
                                        {`http://174.138.101.222:1000/64b666b58baee257c737615e`}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="pb-3 row" style={{marginTop:'15px'}} >
                        <div className="d-flex px-3 col">
                            <div className="card " style={{ width: "27.5rem" }}>
                                <img
                                    className="card-img-top"
                                    src={require("../Images/template_website_3.png")}
                                    alt="Card image cap"
                                    width={"100%"}
                                    height={"200px"}
                                />
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-center font-weight-bold">
                                        Template 3
                                    </h5>
                                    <a className="card-text d-flex justify-content-center">
                                        {`http://174.138.101.222:2000/64b666b58baee257c737615e`}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex px-3 col">
                            <div className="card " style={{ width: "27.5rem" }}>
                                <img
                                    className="card-img-top"
                                    src={require("../Images/template_website_4.PNG")}
                                    alt="Card image cap"
                                    width={"100%"}
                                    height={"200px"}
                                />
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-center font-weight-bold">
                                        Template 4
                                    </h5>
                                    <a className="card-text d-flex justify-content-center ">
                                        {`http://174.138.101.222:8000/64b666b58baee257c737615e`}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-3 row" style={{marginTop:'15px'}}>
                        <div className="d-flex px-3 col">
                            <div className="card " style={{ width: "27.5rem" }}>
                                <img
                                    className="card-img-top"
                                    src={require("../Images/template_website_5.png")}
                                    alt="Card image cap"
                                    width={"100%"}
                                    height={"200px"}
                                />
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-center font-weight-bold">
                                        Template 5
                                    </h5>
                                    <a className="card-text d-flex justify-content-center">
                                        {`http://174.138.101.222:9000/64b666b58baee257c737615e`}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default TemplateSelection;
