import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h1 className="m-4" style={{ fontSize: "62px" }}>
        Welcome to the Education Expense Calculator!
      </h1>
      <div className="text-center" style={{ fontSize: "42px" }}>
        <p>
          This application helps users estimate the cost of attending colleges
          and universities in the U.S.
          <p>
            Use the <strong>Top U.S. Schools </strong>
            search to find schools with the largest enrollment in each state
          </p>
          <p>
            The <strong>Search by Name </strong>feature will return information
            about a particular school.
          </p>
          Happy hunting!
        </p>
      </div>
    </div>
  );
}

export default Home;
