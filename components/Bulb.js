import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-28 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[150px] xl:w-[210px]">
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;
