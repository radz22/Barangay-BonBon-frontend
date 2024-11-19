import React from "react";
import Sidebar from "../../components/admin/Sidebar";
const GeotaggingAdmin = () => {
  return (
    <div className="w-full h-screen bg-[#DEE5F8]">
      <div className="h-[10vh] w-full bg-[#76A0EE]"></div>
      <div className="flex w-full">
        <div className="w-[20%] h-auto">
          <Sidebar />
        </div>
        <div className="w-[80%]">
          <div className="py-3 px-3">
            <div className="flex items-center gap-20">
              <div>
                <h1 className="text-xl font-bold">GEOTAGGING</h1>
              </div>
              <div>
                <h1 className="text-xl font-bold">Project Management</h1>
              </div>
              <div>
                <h1 className="text-xl font-bold">Strategic Road</h1>
              </div>
            </div>
            <div className="w-full h-auto mt-5">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.9011363246486!2d124.64652157477421!3d8.508979691533039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff256565b6711%3A0xd90b9da445a17573!2sBonbon%20Barangay%20Hall!5e0!3m2!1sfil!2sph!4v1731939649689!5m2!1sfil!2sph"
                  className="w-full h-[75vh]"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeotaggingAdmin;
