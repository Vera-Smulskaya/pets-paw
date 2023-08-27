import "./HomePage.css";
import LeftSection from "../LeftSection/LeftSection";
import RightSection from "../RightSection/RightSection";

export default function HomePage() {
  return (
    <div className="home-container">
      <LeftSection />
      <RightSection />
    </div>
  );
}
