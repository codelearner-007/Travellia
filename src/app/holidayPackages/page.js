import Welcome from "@/components/holidaypackagepage/Welcome";
import ContactUs from "@/components/holidaypackagepage/ContactUs";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col bg-background">
      <Welcome />
      <ContactUs />
    </div>
  );
};

export default page;
