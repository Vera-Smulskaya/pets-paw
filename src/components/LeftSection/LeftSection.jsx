import "./LeftSection.css";
import { ReactComponent as LogoSvg } from "./logo.svg";

export default function LeftSection() {
  return (
    <div className="left-container">
      <a className="logo" href="./index.html">
        <div>
          <LogoSvg />
          <span className="logo__text">PetsPaw</span>
        </div>
      </a>
      <p>Hi</p>
      <p>Welcome to MacPaw Bootcamp 2023</p>
      <p>Lets start using The Cat API</p>
      <div>
        <button>Voting</button>
        <button>Breeds</button>
        <button>Gallery</button>
      </div>
    </div>
  );
}
