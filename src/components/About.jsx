const About = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="flex">
          <div className="w-1/2 bg-White h-[33%]">
            <h1>Transform your brand</h1>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
          </div>

          <div className="w-1/2 egg-bg border"></div>
        </div>
        <div className="flex">
          <div className="w-1/2 audience-bg  border"></div>
          <div className="w-1/2 bg-White">
            <h1>Stand out to the right audience</h1>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 bg-White">
            <h1>Graphic design</h1>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>

          <div className="w-1/2 egg-bg  border"></div>
        </div>
      </div>
    </div>
  );
};
export default About;
