import React from "react";
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useSearchParams,
} from "react-router-dom";
import { Home, NotFound } from "./pages/index.ts";
import { Header } from "./components/index.ts";
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen h-full  w-screen flex md:flex-row flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
