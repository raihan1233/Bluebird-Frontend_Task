import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <main className="min-h-screen space-x-4 mt-8 items-center justify-between p-24">
      <div className="flex space-x-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Home;
