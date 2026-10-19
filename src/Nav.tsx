
import logo from "./assets/logo-text.png";
const Nav = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {" "}
          <img src={logo} alt="" />
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className=" flex gap-1">
            <button>Sign In</button>
            <button className="btn btn-error rounded-2xl text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
        <div className="divider"></div>
    </div>
  );
};

export default Nav;
