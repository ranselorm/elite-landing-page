const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat md:h-screen h-[600px] px-4 md:px-10 lg:px-24 font-poppins text-white"
      style={{
        backgroundImage: `url(/lady.jpg)`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80" />
      <div className="relative flex items-center h-full">
        <div className="">
          <div className="text-white max-w-[700px] flex flex-col items-start gap-y-6">
            <h1 className="lg:text-6xl md:text-4xl text-4xl font-bold mb-2 w-11/12 md:w-9/12 tracking-wide">
              Go wherever<span className="font-primary">,</span> whenever
            </h1>

            <p className="text-gray-300 text-lg lg:w-[600px]">
              Choose, book, and drive. Our app makes renting a car easy. Pick
              your ride and hit the road in no time. Simple, fast, and just for
              you.
            </p>
            <button className="mt-4 text-white py-2 px-8 rounded shadow transition-colors hover:bg-white hover:text-black bg-green-700 font-bold">
              Get App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
