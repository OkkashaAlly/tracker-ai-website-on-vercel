"use client";
import { H2, SubHeading } from "../typography";
import RoadmapSlider from "./RoadmapSlider";

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="pt-10 pb-20">
      <div className="xl:w-[82%] max-w-screen-2xl mx-auto px-6 space-y-6 md:space-y-14">
        {/* top */}
        <div className="text-center">
          <SubHeading text="The Road Ahead" />
          <H2 text="ROADMAP" />
        </div>
        {/* bottom */}
        <RoadmapSlider />
      </div>
    </section>
  );
};

export default RoadmapSection;
