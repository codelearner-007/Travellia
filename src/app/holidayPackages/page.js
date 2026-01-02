import Welcome from "@/components/holidaypackagepage/Welcome";
import ContactUs from "@/components/holidaypackagepage/ContactUs";
import LuxuryAssuring from "@/components/holidaypackagepage/LuxuryAssuring";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col bg-background">
      <Welcome />
      <ContactUs />
      <LuxuryAssuring />
    </div>
  );
};

export default page;
