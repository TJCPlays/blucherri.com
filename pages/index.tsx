import type { NextPage } from "next";
import CustomImage from "../components/CustomImage";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="lg:text-8xl text-6xl" style={{ color: "#3db4e1" }}>
          BluCherri
        </h1>
        <div className="container lg:w-96 lg:h-96 w-64 h-64 items-center">
          <CustomImage
            src="/images/blucherri-HD.png"
            alt="BluCherri Logo"
            layout="responsive"
            width={128}
            height={128}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Home;
