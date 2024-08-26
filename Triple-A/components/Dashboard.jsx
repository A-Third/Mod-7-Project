import ArtContainer from "./ArtContainer";
import ArtSearch from "../components/ArtSearch";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <ArtSearch />
      <h1 className="title">Artworks Display</h1>
      <ArtContainer />
    </section>
  );
};

export default Dashboard;
