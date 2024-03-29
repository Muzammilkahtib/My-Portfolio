import React from "react";

function GoogleMap() {

    const openMapInNewPage = () => {
        window.open(
            "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d950.2477832815202!2d77.2161212695358!3d17.69787899895271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQxJzUyLjQiTiA3N8KwMTMnMDAuNCJF!5e0!3m2!1sen!2sin!4v1689318959833!5m2!1sen!2sin",
          "_blank"
        );
      };

  return (
    <>
      <p onClick={openMapInNewPage}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d950.2477832815202!2d77.2161212695358!3d17.69787899895271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQxJzUyLjQiTiA3N8KwMTMnMDAuNCJF!5e0!3m2!1sen!2sin!4v1689318959833!5m2!1sen!2sin"
          style={{
            border: "0",
            width: "100%",
            height:'420px' /* Default width for smaller screens */
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
          
        ></iframe>
      </p>
    </>
  );
}

export default GoogleMap;
