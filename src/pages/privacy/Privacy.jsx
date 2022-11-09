import React from "react";
import "./privacy.css";
import End from "../../components/end/End";

const Privacy = () => {
  return (
    <section className="privacy">
      <div className="container">
        <div className="heading">
          <h1>Privacy and Policy</h1>
        </div>

        <div className="left-privacy">
          <h2>Privacy Policy</h2>
          <h3>Our privacy policy was last updated on june 2022.</h3>
          <p>
            This Privacy Policy describes our policies and procedures on the
            collection, use and disclosure of your information when you use the
            service and tells you about your privacy rights and how the law
            protects you. We use your personal data to provide and improve the
            service. By using the service, you agree to the collection and use
            of information in accordance with this privacy policy.
          </p>
        </div>

        <div className="left-privacy">
          <h2>Information we Collect </h2>
          <h3>Information Collected Directly from You.</h3>
          <p>
            When you contact us using our Site or use the Site’s forms at time
            of registration or subscribing to our services, posting material,
            completing applications, or requesting additional services, we will
            collect certain Personal Information about you so that we may
            adequately respond to your inquiry or offer services to you such as
            your first and last name, postal address, email address, and phone
            number.
          </p>

          <h3>Information Collected Indirectly from You.</h3>
          <p>
            When you visit our Site, we may automatically collect information
            about your visit and maintain that information in our web server
            logs, which are records of the activities on our Site. Examples of
            the information we may collect include: Internet Protocol (IP)
            address; browser type and language; Internet Service Provider (ISP),
            referring and exit websites and applications; operating system;
            date/time stamp of activity; clickstream data; whether you are a
            first-time or a returning user; links you clicked on while in the
            Site; and your flow and navigation path through the Site. We use
            this information in a deidentified and aggregated fashion to help us
            administer the Site, analyze its usage, protect the Site and its
            content from inappropriate use, and improve your Site experience.
          </p>
        </div>

        <div className="left-privacy">
          <h2>Children’s Information</h2>
          <p>
            Our Site is not directed at children. We do not knowingly collect
            Personal Information from children under the age of 13. If you are a
            parent or guardian and believe your child has provided us with
            Personal Information without your consent, please contact us at
            info@homibuddypetcare.com and we will take steps to remove such
            Personal Information from our systems.
          </p>
        </div>
      </div>
      <End />
    </section>
  );
};

export default Privacy;
