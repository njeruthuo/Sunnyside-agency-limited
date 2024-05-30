import arrowDown from "../images/icon-arrow-down.svg";

const Home = () => {
  return (
    <div className="flex items-center flex-col text-white mt-24 space-y-28">
      <h1 className="text-4xl font-bold">WE ARE CREATIVES</h1>
      <img className="mt-16" src={arrowDown} alt="arrowDown" />
    </div>
  );
};
export default Home;
