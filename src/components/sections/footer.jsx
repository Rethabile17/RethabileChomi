import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-bold text-white mb-2">Contact</h2>
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} /> rethabilechomi610@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} /> +27 68210 4225
          </p>
       
        </div>

        
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Location</h2>
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Kimberley
          </p>
        </div>
      </div>

     
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="flex items-center justify-center gap-2 text-gray-400">
          <FontAwesomeIcon icon={faCopyright} /> <span>2025</span> All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
