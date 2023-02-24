import Carousel from "react-material-ui-carousel";
import { items } from "../data";
import CarouselItem from "./CarouselItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const CarouselDisplay = () => {
  return (
    <Carousel
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosNewIcon />}
      fullHeightHover={true}
      navButtonsProps={{
        style: {
          backgroundColor: "cornflowerblue",
          borderRadius: 0,
        },
      }}
      navButtonsWrapperProps={{
        style: {
          bottom: "0",
          top: "unset",
        },
      }}
      animation="slide"
    >
      {items.map((item) => (
        <CarouselItem item={item} />
      ))}
    </Carousel>
  );
};
export default CarouselDisplay;
