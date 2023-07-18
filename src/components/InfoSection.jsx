import React from "react";

const InfoSection = () => {
  return (
    <section className="row-container">
      <article className="info-card">
        <article className="info-details">
          <h2 className="info">Info</h2>
          <p className="hours">
            Phone: 704-270-8123
            <br />
            Hour: Mon - Fri 9AM - 6PM
            <br />
            Sat 9 AM - 4 PM
          </p>
        </article>
        <article className="info-details">
          <h2 className="info">Services Offered</h2>
          <p className="hours">Exotic Car Sales</p>
        </article>
        <article className="info-details">
          <h2 className="info">Address</h2>
          <p className="hours">
            2205 Gap Street
            <br />
            Charlotte, NC 28214
          </p>
        </article>
      </article>
    </section>
  );
};

export default InfoSection;
