import React from "react";
import "./App.css";
import SinglePage from "./components/SinglePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/singlePage/:contentSlug" element={<SinglePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
