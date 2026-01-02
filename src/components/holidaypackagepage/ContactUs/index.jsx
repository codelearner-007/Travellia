import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import Image from "next/image";
import React from "react";
import BookingDetails from "./BookingDetails";
import { Button } from "@/components/ui/button";

const BookingDetails_Data = [
  {
    id: 1,
    title: "Leaving From",
    name: "London (LON)",
    css: "sm:col-span-1 sm:row-start-1 md:col-span-2 md:row-start-1 lg:col-span-5 lg:row-start-1",
  },
  {
    id: 2,
    title: "Going To",
    name: "City code name",
    css: "sm:col-span-1 sm:row-start-1 md:col-span-2 md:row-start-1 lg:col-span-5 lg:row-start-1",
  },
  {
    id: 3,
    title: "Travellers",
    name: "Child, Adult, Infants",
    css: "sm:col-span-1 sm:row-start-1 md:col-span-2 md:row-start-1 lg:col-span-5 lg:row-start-1",
  },
  {
    id: 4,
    title: "Depart",
    name: "23 Sept, 2025",
    css: "sm:col-span-1 sm:row-start-1 md:col-span-2 md:row-start-1 lg:col-span-4 lg:row-start-1",
  },
  {
    id: 5,
    title: "Depart",
    name: "23 Sept, 2025",
    css: "sm:col-span-1 sm:row-start-1 md:col-span-2 md:row-start-1 lg:col-span-4 lg:row-start-1",
  },
  {
    id: 6,
    title: "Passenger Name",
    name: "Name",
    css: "sm:col-span-1 sm:row-start-2 md:col-span-2 md:row-start-2 lg:col-span-5 lg:row-start-2",
  },

  {
    id: 7,
    title: "Email Address",
    name: "Email",
    css: "sm:col-span-1 sm:row-start-2 md:col-span-2 md:row-start-2 lg:col-span-5 lg:row-start-2",
  },
  {
    id: 8,
    title: "Contact Number",
    name: "Number",
    css: "sm:col-span-1 sm:row-start-2 md:col-span-2 md:row-start-2 lg:col-span-5 lg:row-start-2",
  },
  {
    id: 9,
    title: "Transportation",
    name: "Yes",
    css: "sm:col-span-2 sm:row-start-2 md:col-span-4 md:row-start-2 lg:col-span-8 lg:row-start-2",
  },
];

const BookingPage = () => {
  return (
    <section className="pb-{100px} sm:pb-12.5 -mt-32 lg:-mt-40">
      {" "}
      <ContentLayoutWrapper className="rounded-2xl shadow-2xl relative z-10 h-auto md:h-[30vh] lg:h-[32vh] border border-amber-300 bg-white">
        {" "}
        {/* Background Image */}
        <div className="">
          <Image
            src="/holidayPackage/ContactUs/bg-3.png"
            alt="background"
            fill
            className="absolute inset-0 overflow-hidden rounded-3xl object-cover opacity-30"
            loading="lazy"
          />
        </div>
        {/* Heading Box */}
        <div className="flex flex-col gap-6 sm:gap-4 items-center -translate-y-10">
          {" "}
          <div className="border border-y-amber-400 sm:border-none relative flex items-center justify-center  gap-3 w-[95%] sm:w-[80%] m-auto  bg-white  px-4 py-3 rounded-lg  ">
            <Image
              src="/holidayPackage/ContactUs/bag.png"
              alt="bag"
              width={25}
              height={25}
              className=""
              loading="lazy"
            />
            <h1 className="text-md text-center sm:text-xl ">
              Contact Us to Book your Holiday Package
            </h1>
          </div>
          {/* Booking Details Grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-5 sm:grid-rows-2 md:grid-cols-10 md:grid-rows-2 lg:grid-cols-23 lg:grid-rows-2 gap-4 w-full">
            {BookingDetails_Data.map((card) => (
              <div key={card.id} className={card.css}>
                <BookingDetails data={card} />
              </div>
            ))}
          </div>
          <Button
            variant="default"
            className={
              "relative my-0 lg:my-5 px-20 py-6 text-xl   text-white rounded-full"
            }
          >
            Submit Now
          </Button>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default BookingPage;
