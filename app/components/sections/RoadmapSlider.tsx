import { Button } from "@nextui-org/button";
import { useRef } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const RoadmapSlider = () => {
  let sliderRef = useRef<any>();

  const next = () => {
    // @ts-ignore
    sliderRef.slickNext();
  };
  const previous = () => {
    // @ts-ignore
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots: any) => {
      return (
        <div className="flex mt-20">
          <Button
            isIconOnly
            onClick={previous}
            color="primary"
            variant="faded"
            aria-label="Previous"
            radius="full"
          >
            <HiArrowLongLeft className="h-6 w-6" />
          </Button>

          <div>
            <ul> {dots} </ul>
          </div>
          <Button
            isIconOnly
            onClick={next}
            color="primary"
            variant="faded"
            aria-label="Next"
            radius="full"
          >
            <HiArrowLongRight className="h-6 w-6" />
          </Button>
        </div>
      );
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const roadmapContent = [
    {
      title: "Phase 1",
      content: [
        "- Website and Bot development",
        "- Token Launch",
        "- Bot launch and integration in group chats",
        "- Onboarding longterm KOLs",
      ],
    },
    {
      title: "Phase 2",
      content: [
        "- Integrate Premium features",
        "- Add more blockchains",
        "- Achieve over 20,000 active users",
      ],
    },
    {
      title: "Phase 3",
      content: [
        "- Start generating revenue from ads",
        "- Share revenue with holders",
        "- Initiate a bot referral program to expand the user base.",
        "- Achieve over 70,000 users",
      ],
    },
    {
      title: "Phase 4",
      content: [
        "- Start generating revenue from ads",
        "- Share revenue with holders",
        "- Initiate a bot referral program to expand the user base.",
        "- Achieve over 70,000 users",
      ],
    },
  ];

  return (
    <>
      <Slider
        {...settings}
        ref={(slider: any) => {
          sliderRef = slider;
        }}
      >
        {roadmapContent.map(item => (
          <div key={item.title} className="px-2 md:px-4 !flex justify-center">
            <div className="rounded-lg p-6 md:p-8 bg-[#99D2EC]/10 backdrop-blur w-[380px] h-[300px] md:h-[230px] border border-[#30ADDA]/30">
              <h3 className="uppercase font-bold text-xl mb-2">{item.title}</h3>
              <ul>
                {item.content.map(li => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Slider>
      <div style={{ textAlign: "center" }}></div>
    </>
  );
};

export default RoadmapSlider;
