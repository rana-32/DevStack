
import logoi from "./assets/logo-text.png"
const Footer = () => {
   return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto pt-16 pb-10">

        <div className="grid grid-cols-4 gap-20 pb-16">

          <div>
            
            <img src={logoi} alt="" />

            <p className="text-gray-400 mt-5 leading-7">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex gap-6 mt-7 font-medium text-gray-600">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-5">
              PRODUCT
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <a href="#">Home</a>
              <a href="#">Technologies</a>
              <a href="#">Projects</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-5">
              COMPANY
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-5">
              LEGAL
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-8 flex justify-between text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-8">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );

};

export default Footer;