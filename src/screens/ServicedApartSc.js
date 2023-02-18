import React from "react";
import ServicedApartments from "../components/servicedApartments/ServicedApartments";
import DownloadBtn from "../components/sky-high/DownloadBtn";
import ServicedApartment from "../components/serviced apartments imgs/arete meditation retreat 3.jpg"

const ServicedApartSc = () => {
  return (
    <>
    <DownloadBtn title="SERVICED APARTMENTS" images={ServicedApartment} Pdf="Arete Rental Apts Corporate Proposal_1.pdf" />
    <ServicedApartments />
    </>
  )
};


export default ServicedApartSc;
