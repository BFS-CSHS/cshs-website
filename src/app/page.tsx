import Image from "next/image";
import Button from "./components/Button";
import Card from "./components/Card";
import Member from "./components/Member";
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
          className="md:grid md:grid-cols-12 md:text-left text-center mb-12"
          data-aos="fade-right"
        >
          <h1 className="md:col-span-4 text-7xl text-white self-center font-bold md:mb-0 mb-5">
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

      {/* Club photos */}
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-6 mb-12" data-aos="fade-down">
          <div className="relative h-48 w-full shadow-xl">
            <Image
              className="object-cover rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110"
              src="/ClubPhotos/1.jpg"
              alt="cshs"
              fill
            />
          </div>
          <div className="relative h-48 w-full shadow-xl">
            <Image
              className="object-cover rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110"
              src="/ClubPhotos/2.jpg"
              alt="cshs"
              fill
            />
          </div>
          <div className="relative h-48 w-full shadow-xl">
            <Image
              className="object-cover rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110"
              src="/ClubPhotos/3.jpg"
              alt="cshs"
              fill
            />
          </div>
          <div className="relative h-48 w-full shadow-xl">
            <Image
              className="object-cover rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110"
              src="/ClubPhotos/4.jpg"
              alt="cshs"
              fill
            />
          </div>
        </div>
      </div>

       {/* Club members */}
      <div id="members" className="container mx-auto">
        <h1
          className="text-7xl text-white font-bold text-center"
          data-aos="fade-right"
        >
          Our Club Members
        </h1>

        <div
          className="flex justify-center mt-5 gap-x-5 mb-12"
          data-aos="fade-right"
        >
          <Button color="red">2024-2025</Button>
          <Button color="green">2023-2024</Button>
        </div>

        <div className="grid grid-col-3 gap-y-8 mb-32" data-aos="fade-up">
          <div className="flex justify-center gap-x-5">
            <Member
              name="Artem Kim"
              position="President"
              photoPath="ajsdfjas"
              pronouns="he/him"
            />

            <Member
              name="Tanvi Kumar"
              position="Vice-president"
              photoPath="ajsdfjas"
              pronouns="she/her"
            />
          </div>
          <div className="flex justify-center gap-x-5">
            <Member
              name="Aiden Yoon"
              position="Treasurer"
              photoPath="ajsdfjas"
              pronouns="he/him"
            />

            <Member
              name="Vivian Choi"
              position="Webmaster"
              photoPath="ajsdfjas"
              pronouns="she/her"
            />

            <Member
              name="Dana Kim"
              position="Secretary"
              photoPath="ajsdfjas"
              pronouns="she/her"
            />
          </div>
          <div className="flex justify-center gap-x-5">
            <Member
              name="Roenne Arjona"
              position="Member"
              photoPath="ajsdfjas"
              pronouns="she/her"
            />
          </div>
        </div>
      </div>
    </>
  );
}
