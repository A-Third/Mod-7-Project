import ArtContainer from "./ArtContainer";
import ArtSearch from "../components/ArtSearch";

const Dashboard = () => {
  return (
    <>
      <ArtSearch />
      <h1>Art</h1>
      <ArtContainer />
    </>
  );
};

export default Dashboard;
