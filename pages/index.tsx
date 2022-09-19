import type { NextPage } from "next";
import Countries from "../components/Countries";
import VisitedCounties from "../components/VisitedCounties";

const Home: NextPage = () => {
  return (
    <div>
      <div className="border-[#92c5dd]-700 border-4 rounded-[16px] mb-[16px] py-[24px] px-[16px]">
        <h2 style={{ fontFamily: "Helvetica" }}>Countries to Visit</h2>
        <VisitedCounties />
      </div>
      <Countries />
    </div>
  );
};

export default Home;
