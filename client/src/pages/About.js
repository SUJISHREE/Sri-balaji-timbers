import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            We will provide a well good service in timber and painting services . We will pick your order and provide a live instalation in your home.
            <center>Thank you</center>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
