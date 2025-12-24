import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const PLACES = [
  {
    id: 1,
    name: "Egypt",
    price: 1349,
    image: "/home/adventure/egypt.png",
  },
  {
    id: 2,
    name: "Turkey",
    price: 1349,
    image: "/home/adventure/turkey.png",
  },
  {
    id: 3,
    name: "Dubai",
    price: 1349,
    image: "/home/adventure/dubai.png",
  },
  {
    id: 4,
    name: "Abu Dhabi",
    price: 1349,
    image: "/home/adventure/abu-dhabi.png",
  },
  {
    id: 5,
    name: "turkey",
    price: 1349,
    image: "/home/adventure/turkey-2.png",
  },
  {
    id: 6,
    name: "Dubai",
    price: 1349,
    image: "/home/adventure/dubai-2.png",
  },
];

const FamilyAdventures = () => {
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-20 md:pt-30 min-h-[90vh] sm:min-h-[100vh] md:min-h-[110vh] lg:min-h-[120vh] xl:min-h-[150vh]">
      <Image
        fill
        src={"/home/adventure/okl.png"}
        className="absolute top-0 left-0 z-1 "
      />
      <div className="w-32/30 h-1/4 absolute left-0 top-30 z-1">
        <Image src={"/shapes/paper-plane.png"} fill />
      </div>
      <ContentLayoutWrapper className={"flex flex-col relative z-2"}>
        <div className="grid grid-cols-1 md:grid-cols-10 grid-rows-1 items-center justify-between h-full gap-6 px-4 md:px-0">
          {/* Image Section */}
          <div className="col-span-1 md:col-start-1 md:col-end-6 w-full h-full flex justify-center md:justify-start">
            <Image
              src={"/home/adventure/mobile-and-plane.png"}
              width={800}
              height={600}
              className="w-full h-auto max-h-[75%] object-contain"
              unoptimized
              alt="Family adventure - mobile and plane"
            />
          </div>

          {/* Text & Button Section */}
          <div className="col-span-1 md:col-start-6 md:col-end-11 flex flex-col gap-4 text-center md:text-left">
            <div>
              <h3 className="uppercase text-gray-600 text-lg font-semibold">
                Family adventures
              </h3>
              <h1 className="text-primary uppercase font-bold text-4xl md:text-5xl">
                Book your flights
              </h1>
              <h2 className="text-gray-800 uppercase font-thin text-4xl md:text-5xl">
                Effortlessly
              </h2>
            </div>
            <p className="text-base text-gray-500 max-w-lg mx-auto md:mx-0">
              Enjoy seamless booking to our top family-friendly destinations.
              Whether it's theme parks, wildlife safaris, interactive museums,
              or outdoor activities, embark on exciting adventures and create
              lasting memories with your loved ones in safe, fun-filled
              environments.
            </p>
            <div className="flex justify-center md:justify-start mt-10">
              <Button className="px-12 py-6 rounded-full text-xl" size={"lg"}>
                View Packages
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-6 mt-20">
          {PLACES.map((place) => {
            return (
              <Card
                key={place.id}
                className="relative overflow-hidden rounded-4xl h-96 group cursor-pointer py-0"
              >
                {/* Background Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={place.image}
                    fill
                    alt={place.name}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Text Overlay */}
                <h3 className="text-xl font-semibold absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                  Umrah with {place.name} Stay <br /> Starting From £
                  {place.price}
                </h3>
              </Card>
            );
          })}
        </div>
        <Button className="text-2xl px-28 py-10 self-center rounded-3xl mt-14 sm:mb-20">
          Load More
        </Button>
      </ContentLayoutWrapper>
    </section>
  );
};

export default FamilyAdventures;
