import "./faq.css";
import React from "react";
import End from "../../components/end/End";
import Faq from "react-faq-component";

const Faqs = () => {
  const data = {
    rows: [
      {
        title: "Lorem Ipsum dolor sit",
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque similique, placeat vel eligendi quidem aliquid odit enim suscipit aspernatur quo voluptates iusto unde voluptas perferendis cupiditate, quibusdam aperiam, voluptatem mollitia tenetur doloremque? Eaque dolores corporis molestias earum blanditiis saepe ducimus iste asperiores? Numquam ipsum, libero nostrum repellat sint vero rem!`,
      },

      {
        title: "Lorem Ipsum dolor sit",
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque similique, placeat vel eligendi quidem aliquid odit enim suscipit aspernatur quo voluptates iusto unde voluptas perferendis cupiditate, quibusdam aperiam, voluptatem mollitia tenetur doloremque? Eaque dolores corporis molestias earum blanditiis saepe ducimus iste asperiores? Numquam ipsum, libero nostrum repellat sint vero rem!`,
      },

      {
        title: "Lorem Ipsum dolor sit",
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque similique, placeat vel eligendi quidem aliquid odit enim suscipit aspernatur quo voluptates iusto unde voluptas perferendis cupiditate, quibusdam aperiam, voluptatem mollitia tenetur doloremque? Eaque dolores corporis molestias earum blanditiis saepe ducimus iste asperiores? Numquam ipsum, libero nostrum repellat sint vero rem!`,
      },
      {
        title: "Lorem Ipsum dolor sit",
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque similique, placeat vel eligendi quidem aliquid odit enim suscipit aspernatur quo voluptates iusto unde voluptas perferendis cupiditate, quibusdam aperiam, voluptatem mollitia tenetur doloremque? Eaque dolores corporis molestias earum blanditiis saepe ducimus iste asperiores? Numquam ipsum, libero nostrum repellat sint vero rem!`,
      },
      {
        title: "Lorem Ipsum dolor sit",
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque similique, placeat vel eligendi quidem aliquid odit enim suscipit aspernatur quo voluptates iusto unde voluptas perferendis cupiditate, quibusdam aperiam, voluptatem mollitia tenetur doloremque? Eaque dolores corporis molestias earum blanditiis saepe ducimus iste asperiores? Numquam ipsum, libero nostrum repellat sint vero rem!`,
      },
    ],
  };

  const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
    bgColor: "#fff",
    rowContentColor: "black",
    arrowColor: "black",
    transitionDuration: "0.8s",
  };

  const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
  };
  return (
    <section className="faq">
      <div className="main-container">
        <div className="heading">
          <h3>FAQs Section</h3>
          <h1
            style={{
              marginBottom: "30px",
            }}
          >
            Frequently Asked Questions
          </h1>
        </div>
        <Faq data={data} styles={styles} config={config} />
      </div>
      <End />
    </section>
  );
};

export default Faqs;
