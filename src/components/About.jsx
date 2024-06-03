import egg from "../images/desktop/image-transform.jpg";
import audience from "../images/desktop/image-stand-out.jpg";
// import graphic from "../images/desktop/image-graphic-design.jpg";
// import photography from "../images/desktop/image-photography.jpg";

const About = () => {
  return (
    <div>
      <div id="about" className="">
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="w-1/2 bg-White flex justify-center items-center">
            <div className="w-[75%] mx-auto my-24 sm:my-auto">
              <h1>Transform your brand</h1>
              <p>
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>

              <article className="hover:border-b-Yellow">LEARN MORE</article>
            </div>
          </div>

          <div className="sm:w-1/2 flex ">
            <img className="sm:h-[75vh] w-full" src={egg} alt="" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2">
            <img className="sm:h-[75vh] w-full" src={audience} alt="" />
          </div>
          <div className="w-1/2 bg-White flex justify-center items-center">
            <div className="w-[75%] mx-auto my-24">
              <h1>Stand out to the right audience</h1>
              <p>
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </p>

              <article>LEARN MORE</article>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:min-h-[75vh]">
          <div className="sm:w-1/2 graphics-bg flex justify-center items-center">
            <div className="sm:w-[50%] mx-auto sm:mt-36 my-44 sm:my-0 text-center">
              <h2>Graphic design</h2>
              <p>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </div>

          <div className="sm:w-1/2 photo-bg flex justify-center items-center">
            <div className="sm:w-[50%] mx-auto sm:mt-36 my-44 sm:my-0 text-center">
              <h2>Photography</h2>
              <p className="">
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

