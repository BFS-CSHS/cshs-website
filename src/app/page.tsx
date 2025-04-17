import Button from "./components/Button";
import Card from "./components/Card";
import { RiUserCommunityFill } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";
import { HiOutlineAcademicCap } from "react-icons/hi";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/banner.jpg')", height: "100vh" }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative flex flex-col h-full items-center justify-center">
          <h1
            className="text-white md:text-8xl text-7xl font-bold mb-3 text-center"
            data-aos="fade-down"
          >
            Computer Science Honor Society
          </h1>
          <p
            className="text-white md:text-4xl text-3xl mb-12"
            data-aos="fade-up"
          >
            Busan Foreign School
          </p>
          <Button color="blue" href="#learn-more" data-aos="fade-up">
            Learn more
          </Button>
        </div>
      </div>

      {/* Learn more section */}
      <div id="learn-more" className="container mx-auto">
        <div data-aos="fade-right">
          <h1 className="text-7xl text-white md:text-left text-center mt-16 font-bold mb-5">
            Who are we?
          </h1>
          <p className="text-2xl text-white md:px-0 px-8 md:ml-16 mb-24">
            The BFS Computer Science Honor Society is an organization supported
            by the Computer Science Teachers Association and established at BFS
            to encourage students’ enthusiasm for computer science, to honor
            academic excellence, and to promote service.
          </p>
        </div>
        <div
          className="md:grid md:grid-cols-12 md:text-left text-center mb-32"
          data-aos="fade-right"
        >
          <h1 className="md:col-span-4 text-7xl text-white self-center font-bold mb-5">
            Our Goals
          </h1>
          <div className="md:col-span-8 grid grid-rows-3 gap-4 md:px-0 px-8">
            <Card
              title="Recognize and Promote Academic Excellence"
              color="blue"
              icon={HiOutlineAcademicCap}
            >
              Celebrate and encourage high-achieving students in computer
              science through honor rolls, awards, and scholarship
              opportunities.
            </Card>
            <Card
              title="Foster Professional Development"
              color="blue"
              icon={FaComputer}
            >
              Provide workshops, speaker events, and mentorship programs that
              help members build technical skills, leadership qualities, and
              career-readiness.
            </Card>
            <Card
              title="Serve and Engage the Community"
              color="blue"
              icon={RiUserCommunityFill}
            >
              Organize outreach activities—such as coding clubs for younger
              students, hackathons, or open-source contributions—to share
              computing knowledge and give back.
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
