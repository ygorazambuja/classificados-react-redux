import React from "react";
import Header from "../components/Header";
import GridList from "../components/GridList";
import { connect } from "react-redux";

const Home: React.FC = () => {
  return (
    <>
      <Header></Header>
      <GridList></GridList>
    </>
  );
};

export default connect()(Home);
