import type { NextPage } from "next";
import Countries from "../components/Countries";
import LazyCountries from "../components/LazyCountries";
import VisitedCounties from "../components/VisitedCounties";

const Home: NextPage = () => {
  return (
    <div>
      <div className="border-[#92c5dd]-700 border-4 rounded-[16px] mb-[16px] py-[24px] px-[16px]">
        <h1 className="text-2xl font-semibold">Countries to Visit</h1>
        <VisitedCounties />
      </div>
      {/* <Countries /> */}
      <LazyCountries />
    </div>
  );
};

export default Home;
