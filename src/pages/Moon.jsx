import { destination } from "../data";

const Moon = () => {
  //Getting the moon data
  const destintionData = destination.find((dest) => {
    dest.name.toLowerCase() === "moon";
  });

  return (
    <div>
      <div>
        <img src={destintionData.images.png} alt="" />
      </div>
    </div>
  );
};

export default Moon;
