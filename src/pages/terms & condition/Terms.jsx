import React from "react";
import "./terms.css";
import End from "../../components/end/End";

const Terms = () => {
  return (
    <section className="terms">
      <div className="container">
        <div className="heading">
          <h1>Terms and Condition</h1>
        </div>

        <div className="left-privacy">
          <h2>1. Introduction</h2>
          <p>
            Welcome to <span>Car Dekho</span>
          </p>
          <p>
            These Terms of Service (“Terms”, “Terms of Service”) govern your use
            of our website located at cardekho.com (together or individually
            “Service”) operated by <span>Car Dekho</span>. Our Privacy Policy
            also governs your use of our Service and explains how we collect,
            safeguard and disclose information that results from your use of our
            web pages.
          </p>
        </div>

        <div className="left-privacy">
          <h2>2. Communications</h2>
          <p>
            <span>Communication via:</span>
          </p>
          <p>
            By using our Service, you agree to subscribe to newsletters,
            marketing or promotional materials and other information we may
            send. However, you may opt out of receiving any, or all, of these
            communications from us by following the unsubscribe link or by
            emailing at wagging@gmail.com.
          </p>
        </div>

        <div className="left-privacy">
          <h2>3. Purchases</h2>
          <p>
            <span>Purchases or Shop</span>
          </p>
          <p>
            If you wish to purchase any product or service made available
            through Service (“Purchase/Shop”), you may be asked to supply
            certain information relevant to your Purchase including but not
            limited to, your credit or debit card number, the expiration date of
            your card, your billing address, and your shipping information. You
            represent and warrant that: (i) you have the legal right to use any
            card(s) or other payment method(s) in connection with any Purchase;
            and that (ii) the information you supply to us is true, correct and
            complete.
            <br /> We may employ the use of third party services for the purpose
            of facilitating payment and the completion of Purchases. By
            submitting your information, you grant us the right to provide the
            information to these third parties subject to our Privacy Policy. We
            reserve the right to refuse or cancel your order at any time for
            reasons including but not limited to: product or service
            availability, errors in the description or price of the product or
            service, error in your order or other reasons. We reserve the right
            to refuse or cancel your order if fraud or an unauthorized or
            illegal transaction is suspected.
          </p>
        </div>

        <div className="left-privacy">
          <h2>4. Copyright Policy</h2>
          <p>
            <span>Copyright Policy</span>
          </p>
          <p>
            We respect the intellectual property rights of others. It is our
            policy to respond to any claim that Content posted on Service
            infringes on the copyright or other intellectual property rights
            (“Infringement”) of any person or entity. If you are a copyright
            owner, or authorized on behalf of one, and you believe that the
            copyrighted work has been copied in a way that constitutes copyright
            infringement, please submit your claim via email to
            wagging@gmail.com, with the subject line: “Copyright Infringement”
            and <br /> include in your claim a detailed description of the
            alleged Infringement as detailed below, under “DMCA Notice and
            Procedure for Copyright Infringement Claims” You may be held
            accountable for damages (including costs and attorneys’ fees) for
            misrepresentation or bad-faith claims on the infringement of any
            Content found on and/or through Service on your copyright.
          </p>
        </div>
      </div>
      <End />
    </section>
  );
};

export default Terms;
