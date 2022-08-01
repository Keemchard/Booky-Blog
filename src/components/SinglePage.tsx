import React from "react";
import { useQuery } from "@apollo/client";
import { SINGLE_ARTICLE_QUERY } from "../queries/sample";
import HtmlRenderer from "../util/HtmlRenderer";
import { Link, useLocation, useParams } from "react-router-dom";
import "./SinglePage.component.css";

const SinglePage = () => {
  //=============================
  const { contentSlug } = useParams();
  //=============================
  //-----------------------------
  // const location = useLocation();
  // const contentSlug = location.state;
  //-----------------------------
  const {
    data: postData,
    loading: postLoading,
    error: postError,
  } = useQuery(SINGLE_ARTICLE_QUERY, {
    variables: {
      slug: contentSlug,
    },
  });
  if (postLoading) {
    return (
      <>
        <div className="m-load h-screen flex items-center justify-center">
          <div className="load-txt text-5xl font-bold">
            Single Page Loading... &#128054;
          </div>
        </div>
      </>
    );
  }
  if (postError) {
    return (
      <>
        <div className="m-load h-screen flex items-center justify-center">
          <div className="load-txt text-5xl font-bold">
            Single Page Error &#128054;
          </div>
        </div>
      </>
    );
  }
  const { postBy } = postData;
  const { id, author, featuredImage, content, title, date } = postBy;
  const { name, uri: authorLink, avatar } = author;
  const { url } = avatar;
  const { sourceUrl, uri } = featuredImage;
  return (
    <>
      {/* <Header /> */}
      <div className="single-page-container m-[auto] mt-[120px]">
        <div className="cover-page bg-black relative p-2.5 flex items-center h-[70vh]">
          <img
            className="single-article-img absolute left-0 w-full opacity-50 h-[70vh]"
            src={sourceUrl}
            alt="articlePhoto"
          />
          <div className="single-article-title-con ml-12 p-5 z-[1]">
            <h1 className="single-article-title font-bold text-[45px] leading-[50px]">
              {title}
            </h1>
            <p className="single-article-date pl-[5px] my-5 mx-0">
              &#x23F1; {date}
            </p>
            <div className="extra-btn">
              <button
                className="mr-5 duration-300 hover:scale-[1.1] pt-[8px] pb-[8px] pl-[17px] pr-[17px] rounded-[7px] text-[14px]"
                style={{ backgroundColor: "#3B5998" }}
              >
                SHARE
              </button>
              <button
                className="mr-5 duration-300 hover:scale-[1.1] pt-[8px] pb-[8px] pl-[17px] pr-[17px] rounded-[7px] text-[14px]"
                style={{ backgroundColor: "#1DA1F2" }}
              >
                TWEET
              </button>
              <button
                className="mr-5 duration-300 hover:scale-[1.1] pt-[8px] pb-[8px] pl-[17px] pr-[17px] rounded-[7px] text-[14px]"
                style={{
                  border: "1px solid darkorange",
                  color: "darkorange",
                }}
              >
                OPEN IN APP
              </button>
            </div>
          </div>
        </div>

        <div className="single-page-content p-5">
          <div className="author-con-from-sp">
            <img className="author-img" src={url} alt="" />
            <p className="text-[12px] text-[gray]">About The Author</p>
            <p className="author-name">{name}</p>
            <a
              className="author-link"
              target="blank"
              href={`https://booky.ph/blog/${authorLink}`}
            >
              More About {name}
            </a>
          </div>
          <div className="content-con-from-sp">
            <HtmlRenderer>{content}</HtmlRenderer>
          </div>
          <div className="order-con-from-sp">
            <div className="order-form">
              <p>Order direct from restaurants.</p>
              <p>Enjoy the best prices.</p>
              <button>ORDER NOW</button>
            </div>
            <div className="subs-form">
              <input type="email" placeholder="example@email.com" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <button className="back-to-list fixed bottom-14 right-20 py-2.5 px-5 rounded-xl duration-300 z-[2] hover:scale-[1.1] bg-[#062b46]">
        <Link to="/">Back</Link>
      </button>
    </>
  );
};

export default SinglePage;
