interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="grid place-items-center h-[75vh]">
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div className="lg:grid lg:gap-8">
          <div className="sm:text-center md:max-w-4xl md:mx-auto lg:text-left">
            <h1>
              <span className="block text-lg font-semibold tracking-wide text-orange-500 sm:text-base lg:text-lg xl:text-lg">
                Hi, my name is
              </span>
              <span className="mt-1 block text-4xl font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-300">Eric Ahmann.</span>
                <span className="block text-gray-400">I am a software developer.</span>

              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl max-w-2xl">
              I am currently working on personal projects to push my skills to the next level. Check out my portfolio below to see what I am working on.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
