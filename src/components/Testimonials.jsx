import emily from "../images/image-emily.jpg";
import thomas from "../images/image-thomas.jpg";
import jennie from "../images/image-jennie.jpg";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="min-h-screen bg-White flex flex-col sm:flex-row justify-center items-center py-12"
    >
      <div className="scroll-pt-20 text-center">
        <h1 className="mb-24 text-VeryDarkGrayishBlue text-xl font-bold">
          CLIENT TESTIMONIALS
        </h1>

        <div className="flex flex-col sm:flex-row space-y-12 sm:space-y-0 space-x-12">
          <div className="flex flex-col items-center">
            <img className="rounded-full w-12 h-12" src={emily} alt="" />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>

            <div className="mt-8">
              <p id="name">Emily R.</p>

              <p id="position">Marketing Director</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img className="rounded-full w-12 h-12" src={thomas} alt="" />
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>

            <div className="mt-8">
              <p id="name">Thomas S.</p>

              <p id="position">Chief Operating Officer</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img className="rounded-full w-12 h-12" src={jennie} alt="" />
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>

            <div className="mt-8">
              <p id="name">Jennie F.</p>

              <p id="position">Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
