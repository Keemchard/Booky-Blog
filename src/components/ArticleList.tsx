import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { ALL_ARTICLES_QUERY } from "../queries/sample";
import { Link } from "react-router-dom";

const ArticleList = () => {
  //   const [contentSlug, setContentSlug] = useState<string>("");
  const { data, loading, error } = useQuery(ALL_ARTICLES_QUERY);

  if (loading) {
    return (
      <>
        <div className="m-load h-screen flex items-center justify-center">
          <div className="load-txt text-5xl font-bold">
            Loading Post... &#128054;
          </div>
        </div>
      </>
    );
  }
  if (error) {
    return (
      <>
        <div className="m-load h-screen flex items-center justify-center">
          <div className="load-txt text-5xl font-bold">
            Error In Loading Post &#128045;
          </div>
        </div>
      </>
    );
  }

  const { posts } = data;
  const { nodes } = posts;

  return (
    <>
      {/* <Header /> */}
      <div className="main-container pt-5 pb-5 pr-10 pl-10 max-w-[1366px] m-[auto] mt-[120px]">
        <h1 className="header-title text-4xl mb-3 font-bold text-[#062b46]">
          Latest Articles
        </h1>
        <div className="main-article-con grid justify-center grid-cols-4">
          {nodes.map((nodesParam: any) => {
            const nodeImages = (
              <Link
                to={`/singlePage/${nodesParam.slug}`}
                // state={nodesParam.slug}
                className="text-3xl"
              >
                <img
                  className="node-images rounded-xl w-full h-40"
                  src={nodesParam.featuredImage.sourceUrl}
                  alt="lol"
                />
              </Link>
            );
            return (
              <div
                className="article-con m-2.5 mt-[15px] p-2.5 rounded-xl w-[290px] duration-300 hover:scale-[1.1] hover:bg-[#062b46]"
                key={nodesParam.id}
              >
                <div className="article">{nodeImages}</div>
                <Link
                  to={`/singlePage/${nodesParam.slug}`}
                  // state={nodesParam.slug}
                  className="text-3xl"
                >
                  <p className="article-title leading-5 font-bold text-[16px] mt-[15px] text-[#61c2ee]">
                    {nodesParam.title}
                  </p>
                </Link>

                <p className="author-date text-sm mt-[10px] text-[#188ede]">
                  By {nodesParam.author.name} | {nodesParam.date}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ArticleList;
