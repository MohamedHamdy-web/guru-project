import heroImage from "../assets/hero-image.png";

function Hero() {
  return (
    <section className="px-8 mt-6">
      <div className="bg-orange-500 rounded-3xl relative flex items-center justify-center min-h-65 md:min-h-80 overflow-hidden">
        <img
          src={heroImage}
          alt="hero"
          className="absolute left-0 bottom-0 w-45 md:w-55"
        />

        <div className="text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            Get 50% Off on
            <br />
            Selected categories
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
