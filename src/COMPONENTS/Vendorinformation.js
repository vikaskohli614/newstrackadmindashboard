import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../CSS/Vendorinformation.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "./Navbar";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import axios from "axios";
import { MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Vendorinfromation = () => {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const goToNextStep = (e) => {
    // e.stopPropagation();
    setStep(step + 1);
    // console.log(values);
  };

  const goToPreviousStep = () => {
    setStep(step - 1);
    // console.log(values);
  };

  const initialValues = {
    publisher_name: "",
    type_of_Entity: "",
    password: "",
    owner_key: "",
    publisher_BIO: "",
    account_manager: "",
    mobile: "",
    email: "",

    tech_name: "",
    tech_mobile: "",
    tech_email: "",

    finance_name: "",
    finance_mobile: "",
    finance_email: "",

    sales_name: "",
    sales_mobile: "",
    sales_email: "",

    editorial_name: "",
    editorial_mobile: "",
    editorial_email: "",

    regd_address: "",
    regd_state_city: "",
    regd_pin_code: "",

    comm_address: "",
    comm_state_city: "",
    comm_pin_code: "",
    publication_name: "",
    Lang_of_Publication: "",
    city_of_publication: "",
    frequency_of_publication: "",
    circulation: "",
    RNI_No: "",
    RNI_Regn_date: "",
    pub_social_facebook: "",
    pub_social_twitter: "",
    pub_social_linkedin: "",
    pub_social_instagram: "",
    pub_social_youtube: "",

    publisher_site_mobile: "",
    publisher_site_email: "",
    domain_name: "",
    logo_large: "",
    logo_small: "",
    site_display_contact: "",

    PAN_No: "",
    GST_No: "",
    Bank_acc_No: "",
    Bank_name: "",
    Branch_name: "",
    IFSC_code: "",
    status_user: "",
    status_publication: "",
    Revenue_Share: "",
    Agreement_Start_Date: "",
    Agreement_End_Date: "",
    Auto_Renewal: "",
    Refferal_by: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === "file") {
      setValues({
        ...values,
        [name]: e.target.files[0],
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  var handleSubmit = async () => {
    let formdata = new FormData();
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        formdata.append(key, values[key]);
      }
    }
    // console.log(formdata);

    try {
      const response = await axios({
        method: "post",
        url: "http://174.138.101.222:8080/publication-details",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" },
      });
      // console.log(response.data);
      setValues({
        publisher_name: "",
        type_of_Entity: "",
        password: "",
        owner_key: "",
        publisher_BIO: "",
        account_manager: "",
        mobile: "",
        email: "",

        tech_name: "",
        tech_mobile: "",
        tech_email: "",

        finance_name: "",
        finance_mobile: "",
        finance_email: "",

        sales_name: "",
        sales_mobile: "",
        sales_email: "",

        editorial_name: "",
        editorial_mobile: "",
        editorial_email: "",

        regd_address: "",
        regd_state_city: "",
        regd_pin_code: "",

        comm_address: "",
        comm_state_city: "",
        comm_pin_code: "",
        publication_name: "",
        Lang_of_Publication: "",
        city_of_publication: "",
        frequency_of_publication: "",
        circulation: "",
        RNI_No: "",
        RNI_Regn_date: "",
        pub_social_facebook: "",
        pub_social_twitter: "",
        pub_social_linkedin: "",
        pub_social_instagram: "",
        pub_social_youtube: "",

        publisher_site_mobile: "",
        publisher_site_email: "",
        domain_name: "",
        logo_large: "",
        logo_small: "",
        site_display_contact: "",

        PAN_No: "",
        GST_No: "",
        Bank_acc_No: "",
        Bank_name: "",
        Branch_name: "",
        IFSC_code: "",
        status_user: "",
        status_publication: "",
        Revenue_Share: "",
        Agreement_Start_Date: "",
        Agreement_End_Date: "",
        Auto_Renewal: "",
        Refferal_by: "",
      });
      alert("Vendor Created Successfully");
    } catch (error) {
      alert(`Error : ${JSON.parse(error.request.response).message}`);
      console.log(error);
    }
  };

  // Render different form screens based on the current step
  const renderFormScreen = () => {
    switch (step) {
      case 1:
        return (
          <div className="formcontainer">
            <p className="vendortext">PUBLISHER DETAILS</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                goToNextStep();
              }}
            >
              <div className="vendorformbox">
                <div className="vendorformbox1">
                  <TextField
                    id="standard-basic"
                    label="PUBLISHER NAME"
                    variant="standard"
                    className="vendorinput"
                    name="publisher_name"
                    required
                    value={values.publisher_name}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="EMAIL"
                    variant="standard"
                    className="vendorinput"
                    name="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={handleInputChange}
                  />

                  <TextField
                    id="standard-basic"
                    label="Mobile"
                    variant="standard"
                    className="vendorinput"
                    name="mobile"
                    required
                    value={values.mobile}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="PUBLISHER BIO"
                    variant="standard"
                    required
                    className="vendorinput"
                    name="publisher_BIO"
                    value={values.publisher_BIO}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="vendorformbox1">
                  <TextField
                    select
                    label="TYPE OF ENTITY"
                    name="type_of_Entity"
                    required
                    variant="standard"
                    value={values.type_of_Entity}
                    onChange={handleInputChange}
                  >
                    <MenuItem value={"indivisual"}>Indivisual</MenuItem>
                    <MenuItem value={"trust"}>Trust</MenuItem>
                    <MenuItem value={"company"}> Company</MenuItem>
                    <MenuItem value={"partnership"}> Partnership</MenuItem>
                    <MenuItem value={"propitorship"}> Propitorship</MenuItem>
                  </TextField>

                  <TextField
                    id="standard-basic"
                    label="PASSWORD"
                    variant="standard"
                    required
                    type="password"
                    className="vendorinput"
                    name="password"
                    value={values.password}
                    onChange={handleInputChange}
                  />

                  <TextField
                    id="standard-basic"
                    label="OWNER"
                    variant="standard"
                    required
                    className="vendorinput"
                    name="owner_key"
                    value={values.owner_key}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="ACCOUNT MANAGER"
                    variant="standard"
                    required
                    className="vendorinput"
                    name="account_manager"
                    value={values.account_manager}
                    onChange={handleInputChange}
                  />

                  <button type="submit" className=" btn vendorbtn">
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div className="formcontainer">
            <p className="vendortext">PUBLISHER ADDRESS</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                goToNextStep();
              }}
            >
              <div className="vendorformbox">
                <div className="vendorformbox1">
                  <TextField
                    id="standard-basic"
                    label="TECH CONTACT PERSON NAME"
                    variant="standard"
                    className="vendorinput"
                    name="tech_name"
                    value={values.tech_name}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="MOBILE "
                    variant="standard"
                    className="vendorinput"
                    name="tech_mobile"
                    value={values.tech_mobile}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="EMAIL "
                    variant="standard"
                    className="vendorinput"
                    name="tech_email"
                    value={values.tech_email}
                    onChange={handleInputChange}
                  />

                  <TextField
                    id="standard-basic"
                    label="SALES CONTACT PERSON NAME "
                    variant="standard"
                    className="vendorinput"
                    name="sales_name"
                    value={values.sales_name}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="MOBILE "
                    variant="standard"
                    className="vendorinput"
                    name="sales_mobile"
                    value={values.sales_mobile}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="EMAIL"
                    variant="standard"
                    className="vendorinput"
                    name="sales_email"
                    value={values.sales_email}
                    onChange={handleInputChange}
                  />
                  {/* </FormControl> */}
                  <button
                    className="btn vendorpreviousbtn"
                    onClick={goToPreviousStep}
                  >
                    Previous
                  </button>
                </div>
                <div className="vendorformbox1">
                  <TextField
                    id="standard-basic"
                    label="FINANCE CONTACT PERSON NAME"
                    variant="standard"
                    className="vendorinput"
                    name="finance_name"
                    value={values.finance_name}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="MOBILE "
                    variant="standard"
                    className="vendorinput"
                    name="finance_mobile"
                    value={values.finance_mobile}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="EMAIL"
                    variant="standard"
                    className="vendorinput"
                    name="finance_email"
                    value={values.finance_email}
                    onChange={handleInputChange}
                  />

                  <TextField
                    id="standard-basic"
                    label="EDITORIAL CONTACT PERSON NAME"
                    variant="standard"
                    className="vendorinput"
                    name="editorial_name"
                    value={values.editorial_name}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="MOBILE "
                    variant="standard"
                    className="vendorinput"
                    name="editorial_mobile"
                    value={values.editorial_mobile}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="EMAIL"
                    variant="standard"
                    className="vendorinput"
                    name="editorial_email"
                    value={values.editorial_email}
                    onChange={handleInputChange}
                  />
                  <button className="btn vendorbtn" type="submit">
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      case 3:
        return (
          <div className="formcontainer">
            <p className="vendortext">PUBLISHER ADDRESS</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                goToNextStep();
              }}
            >
              <div className="vendorformbox">
                <div className="vendorformbox1">
                  <TextField
                    id="standard-basic"
                    label="Registered Address"
                    variant="standard"
                    required
                    className="vendorinput"
                    name="regd_address"
                    value={values.regd_address}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="STATE/CITY"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="regd_state_city"
                    value={values.regd_state_city}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="PIN-CODE"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="regd_pin_code"
                    value={values.regd_pin_code}
                    onChange={handleInputChange}
                  />

                  <button
                    className="btn vendorpreviousbtn"
                    onClick={goToPreviousStep}
                  >
                    Previous
                  </button>
                </div>

                <div className="vendorformbox1">
                  <TextField
                    id="standard-basic"
                    label="COMMUNICATION ADDRESS"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="comm_address"
                    value={values.comm_address}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="STATE/CITY"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="comm_state_city"
                    value={values.comm_state_city}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="PIN-CODE"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="comm_pin_code"
                    value={values.comm_pin_code}
                    onChange={handleInputChange}
                  />
                  <button type="submit" className=" btn vendorbtn">
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      case 4:
        return (
          <div className="formcontainer">
            <p className="vendortext">PUBLICATION DETAILS</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                goToNextStep();
              }}
            >
              <div className="vendorformbox">
                <div className="vendorformbox1">
                  <TextField
                    id="standard-basic"
                    label="PUBLICATION NAME "
                    required
                    variant="standard"
                    className="vendorinput"
                    name="publication_name"
                    value={values.publication_name}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="CITY OF PUBLICATION"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="city_of_publication"
                    value={values.city_of_publication}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="CIRCULATION"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="circulation"
                    value={values.circulation}
                    onChange={handleInputChange}
                  />
                  <p style={{ marginBottom: "-1.5rem" }}>
                    RNI REGISTRATION DATE
                  </p>
                  <TextField
                    id="standard-basic"
                    required
                    type="date"
                    variant="standard"
                    className="vendorinput"
                    name="RNI_Regn_date"
                    value={values.RNI_Regn_date}
                    onChange={handleInputChange}
                  />

                  <button
                    className="btn vendorpreviousbtn"
                    onClick={(e) => goToPreviousStep(e)}
                  >
                    Previous
                  </button>
                </div>
                <div className="vendorformbox1">
                  <TextField
                    id="standard-basic"
                    label="LANG OF PUBLICATION"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="Lang_of_Publication"
                    value={values.Lang_of_Publication}
                    onChange={handleInputChange}
                  />
                  <TextField
                    select
                    label="FREQUENCY OF PUBLICATION"
                    name="frequency_of_publication"
                    variant="standard"
                    value={values.frequency_of_publication}
                    onChange={handleInputChange}
                    required
                  >
                    <MenuItem value={"Daily"}>DAILY</MenuItem>
                    <MenuItem value={"None"}></MenuItem>
                    <MenuItem value={"Weekly"}>WEEKLY</MenuItem>
                    <MenuItem value={"Monthly"}>MONTHLY</MenuItem>
                    <MenuItem value={"BI Monthly"}>BI MONTHLY</MenuItem>
                    <MenuItem value={"Fornightly"}>FORNIGHTLY</MenuItem>
                    <MenuItem value={"Yearly"}>YEARLY</MenuItem>
                    <MenuItem value={"Half Yearly"}>HALF YEARLY</MenuItem>
                    <MenuItem value={"Quarterly"}>QUARTERLY</MenuItem>
                  </TextField>
                  <TextField
                    id="standard-basic"
                    label="RNI NO"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="RNI_No"
                    value={values.RNI_No}
                    onChange={handleInputChange}
                  />
                  <button className="btn vendorbtn" type="submit">
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      case 5:
        return (
          <div className="formcontainer">
            <p className="vendortext">PUBLICATION SOCIAL</p>
            <div className="vendorformbox">
              <div className="vendorformbox1">
                <TextField
                  id="standard-basic"
                  label="PUB SOCIAL FB"
                  variant="standard"
                  className="vendorinput"
                  name="pub_social_facebook"
                  value={values.pub_social_facebook}
                  onChange={handleInputChange}
                />
                <TextField
                  id="standard-basic"
                  label="PUB SOCIAL LINKEDIN"
                  variant="standard"
                  className="vendorinput"
                  name="pub_social_linkedin"
                  value={values.pub_social_linkedin}
                  onChange={handleInputChange}
                />
                <TextField
                  id="standard-basic"
                  label="PUB YOUTUBE"
                  variant="standard"
                  className="vendorinput"
                  name="pub_social_youtube"
                  value={values.pub_social_youtube}
                  onChange={handleInputChange}
                />

                <button
                  className="btn vendorpreviousbtn"
                  onClick={goToPreviousStep}
                >
                  Previous
                </button>
              </div>
              <div className="vendorformbox1">
                <TextField
                  id="standard-basic"
                  label="PUB SOCIAL TW"
                  variant="standard"
                  className="vendorinput"
                  name="pub_social_twitter"
                  value={values.pub_social_twitter}
                  onChange={handleInputChange}
                />
                <TextField
                  id="standard-basic"
                  label="PUB SOCIAL INSTA"
                  variant="standard"
                  className="vendorinput"
                  name="pub_social_instagram"
                  value={values.pub_social_instagram}
                  onChange={handleInputChange}
                />

                <button className="btn vendorbtn" onClick={goToNextStep}>
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="formcontainer">
            <p className="vendortext">PUBLISHER SITE</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                goToNextStep();
              }}
            >
              <div className="vendorformbox">
                <div className="vendorformbox1">
                  <TextField
                    id="standard-basic"
                    label="DOMAIN NAME"
                    variant="standard"
                    className="vendorinput"
                    name="domain_name"
                    value={values.domain_name}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="MOBILE"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="publisher_site_mobile"
                    value={values.publisher_site_mobile}
                    onChange={handleInputChange}
                  />
                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">
                      Logo Small*
                    </label>
                    <input
                      className="form-control"
                      required
                      type="file"
                      id="formFile"
                      name="logo_small"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div
                    onClick={goToPreviousStep}
                    className="btn vendorpreviousbtn"
                  >
                    Previous
                  </div>
                </div>
                <div className="vendorformbox1">
                  <TextField
                    id="standard-basic"
                    label="SITE DISPLAY CONTACT"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="site_display_contact"
                    value={values.site_display_contact}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="EMAIL"
                    type="email"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="publisher_site_email"
                    value={values.publisher_site_email}
                    onChange={handleInputChange}
                  />
                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">
                      Logo Large
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      name="logo_large"
                      onChange={handleInputChange}
                    />
                  </div>

                  <button className="btn vendorbtn" type="submit">
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      case 7:
        return (
          <div className="formcontainer">
            <p className="vendortext">FINANCE</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                goToNextStep();
              }}
            >
              <div className="vendorformbox">
                <div className="vendorformbox1">
                  <TextField
                    id="standard-basic"
                    label="PAN NO"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="PAN_No"
                    value={values.PAN_No}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="BANK ACCOUNT NO"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="Bank_acc_No"
                    value={values.Bank_acc_No}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="BRANCH NAME"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="Branch_name"
                    value={values.Branch_name}
                    onChange={handleInputChange}
                  />

                  <div
                    onClick={goToPreviousStep}
                    className="btn vendorpreviousbtn"
                  >
                    Previous
                  </div>
                </div>
                <div className="vendorformbox1">
                  <TextField
                    id="standard-basic"
                    label="GST NO"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="GST_No"
                    value={values.GST_No}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="BANK NAME"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="Bank_name"
                    value={values.Bank_name}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="IFSC CODE"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="IFSC_code"
                    value={values.IFSC_code}
                    onChange={handleInputChange}
                  />

                  <button className="btn  vendorbtn" type="submit">
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      case 8:
        return (
          <div className="formcontainer">
            <p className="vendortext">MOU TERMS</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                goToNextStep();
              }}
            >
              <div className="vendorformbox">
                <div className="vendorformbox1">
                  <TextField
                    id="standard-basic"
                    label="Revenue Share"
                    required
                    variant="standard"
                    className="vendorinput"
                    name="Revenue_Share"
                    value={values.Revenue_Share}
                    onChange={handleInputChange}
                  />

                  <p style={{ marginBottom: "-1.5rem" }}>
                    Agreement Start Date *
                  </p>
                  <TextField
                    id="standard-basic"
                    required
                    type="date"
                    variant="standard"
                    className="vendorinput"
                    name="Agreement_Start_Date"
                    value={values.Agreement_Start_Date}
                    onChange={handleInputChange}
                  />

                  <p style={{ marginBottom: "-1.5rem" }}>
                    Agreement End Date *
                  </p>
                  <TextField
                    id="standard-basic"
                    required
                    type="date"
                    variant="standard"
                    className="vendorinput"
                    name="Agreement_End_Date"
                    value={values.Agreement_End_Date}
                    onChange={handleInputChange}
                  />

                  <button
                    className="btn vendorpreviousbtn"
                    onClick={goToPreviousStep}
                  >
                    Previous
                  </button>
                </div>
                <div className="vendorformbox1">
                  <TextField
                    select
                    label="Auto Renewal"
                    required
                    variant="standard"
                    name="Auto_Renewal"
                    value={values.Auto_Renewal}
                    onChange={handleInputChange}
                  >
                    <MenuItem value={"Yes"}>Yes</MenuItem>
                    <MenuItem value={"No"}>No</MenuItem>
                  </TextField>
                  <TextField
                    id="standard-basic"
                    label=" Refferal by "
                    variant="standard"
                    className="vendorinput"
                    name="Refferal_by"
                    value={values.Refferal_by}
                    onChange={handleInputChange}
                  />

                  <button className="btn  vendorbtn" type="submit">
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      case 9:
        return (
          <div className="formcontainer">
            <p className="vendortext">STATUS</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="vendorformbox">
                <div className="vendorformbox1">
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      STATUS OF USER
                    </InputLabel>
                    <NativeSelect
                      value={values.status_user}
                      onChange={handleInputChange}
                      inputProps={{
                        name: "status_user",
                        id: "uncontrolled-native",
                      }}
                    >
                      <option value={"None"}></option>
                      <option value={"Active"}>ACTIVE</option>
                      <option value={"Suspended"}>SUSPENDED</option>
                      <option value={"Inactive"}>INACTIVE</option>
                    </NativeSelect>
                  </FormControl>

                  <button
                    className="btn vendorpreviousbtn"
                    onClick={goToPreviousStep}
                  >
                    Previous
                  </button>
                </div>
                <div className="vendorformbox1">
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      STATUS OF PUBLICATION
                    </InputLabel>
                    <NativeSelect
                      value={values.status_publication}
                      onChange={handleInputChange}
                      inputProps={{
                        name: "status_publication",
                        id: "uncontrolled-native",
                      }}
                    >
                      {" "}
                      <option value={"None"}></option>
                      <option value={"Active"}>ACTIVE</option>
                      <option value={"Suspended"}>SUSPENDED</option>
                      <option value={"Inactive"}>INACTIVE</option>
                    </NativeSelect>
                  </FormControl>
                  {/* </FormControl> */}
                  <button className="btn vendorbtn" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="vendorcontainer">
        <div className="vendorbox1">
          <Navbar />
        </div>
        <div className="vendorbox2">
          <div className="vendorheader">
            <p className="vendorheading">
              <button
                onClick={() => navigate(-1)}
                className="pointer"
                style={{
                  backgroundColor: "transparent",
                  border: "transparent",
                  color: "white",
                }}
              >
                <ArrowBackIcon />
              </button>
              VENDOR REGISTRATION
            </p>
          </div>
          <div className=" buttongroup mt-1 ">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label
                className="btn btn-secondary active btn1"
                onClick={() => {
                  setStep(1);
                }}
              >
                <input
                  type="radio"
                  name="options"
                  id="option1"
                  autoComplete="off"
                  defaultChecked
                />{" "}
                PUBLISHER DETAILS
              </label>
              <label
                className="btn btn-secondary btn1"
                onClick={() => {
                  setStep(2);
                }}
              >
                <input
                  type="radio"
                  name="options"
                  id="option2"
                  autoComplete="off"
                />{" "}
                PUBLISHER CONTACT
              </label>
              <label
                className="btn btn-secondary btn1"
                onClick={() => {
                  setStep(3);
                }}
              >
                <input
                  type="radio"
                  name="options"
                  id="option3"
                  autoComplete="off"
                />
                PUBLISHER ADDRESS
              </label>
              <label
                className="btn btn-secondary btn1"
                onClick={() => {
                  setStep(4);
                }}
              >
                <input
                  type="radio"
                  name="options"
                  id="option3"
                  autoComplete="off"
                />
                PUBLICATION DETAILS
              </label>
              <label
                className="btn btn-secondary btn1"
                onClick={() => {
                  setStep(5);
                }}
              >
                <input
                  type="radio"
                  name="options"
                  id="option3"
                  autoComplete="off"
                />{" "}
                PUBLICATION SOCIAL
              </label>
              <label
                className="btn btn-secondary btn1"
                onClick={() => {
                  setStep(6);
                }}
              >
                <input
                  type="radio"
                  name="options"
                  id="option3"
                  autoComplete="off"
                />
                PUBLISHER SITE
              </label>
              <label
                className="btn btn-secondary btn1"
                onClick={() => {
                  setStep(7);
                }}
              >
                <input
                  type="radio"
                  name="options"
                  id="option3"
                  autoComplete="off"
                />{" "}
                FINANCE
              </label>
              <label
                className="btn btn-secondary btn1"
                onClick={() => {
                  setStep(8);
                }}
              >
                <input
                  type="radio"
                  name="options"
                  id="option3"
                  autoComplete="off"
                />{" "}
                MOU TERMS
              </label>
              <label
                className="btn btn-secondary btn1"
                onClick={() => {
                  setStep(9);
                }}
              >
                <input
                  type="radio"
                  name="options"
                  id="option3"
                  autoComplete="off"
                />{" "}
                STATUS
              </label>
            </div>
          </div>
          <div>{renderFormScreen()}</div>
        </div>
      </div>
    </>
  );
};

export default Vendorinfromation;
