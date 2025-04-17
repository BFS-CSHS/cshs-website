import Image from "next/image";
import Button from "./components/Button";
import Card from "./components/Card";
import Member from "./components/Member";
import Event from "./components/Event";
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
            className="text-white md:text-8xl md:px-0 px-8 text-7xl font-bold mb-3 text-center"
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
        <div className="mb-12" data-aos="fade-right">
          <h1 className="text-7xl text-white md:text-left text-center mt-16 font-bold mb-5">
            Who are{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-transparent bg-clip-text">
              we
            </span>
            ?
          </h1>
          <p className="text-2xl text-white md:px-0 px-8 md:ml-16">
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
            Our{" "}
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-transparent bg-clip-text">
              Goals
            </span>
          </h1>
          <div className="md:col-span-8 grid auto-rows-auto gap-4 md:px-0 px-8">
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
      <div className="container mx-auto mb-12">
        <div
          className="md:grid md:grid-cols-4 md:px-0 px-8 grid auto-rows-auto gap-6"
          data-aos="fade-down"
        >
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
      <div id="members" className="container mx-auto mb-12">
        <h1
          className="text-7xl text-white font-bold text-center"
          data-aos="fade-right"
        >
          Our Club{" "}
          <span className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-transparent bg-clip-text">
            Hackers
          </span>
        </h1>

        <div
          className="flex justify-center mt-5 gap-x-5 mb-12"
          data-aos="fade-right"
        >
          <Button color="red">2024-2025</Button>
          <Button color="green">2023-2024</Button>
        </div>

        <div className="lg:grid grid-col-3 gap-y-8" data-aos="fade-up">
          <div className="lg:flex justify-center gap-x-5 grid auto-rows-auto gap-y-5">
            <div className="flex justify-center">
              <Member
                name="Artem Kim"
                position="President"
                photoPath="ajsdfjas"
                pronouns="he/him"
              />
            </div>

            <div className="flex justify-center lg:mb-0 mb-8">
              <Member
                name="Tanvi Kumar"
                position="Vice-president"
                photoPath="ajsdfjas"
                pronouns="she/her"
              />
            </div>
          </div>
          <div className="xl:flex grid lg:grid-rows-2 lg:justify-center lg:gap-x-5 auto-rows-auto gap-y-5 lg:mb-0 mb-8">
            <div className="lg:flex gap-x-5 grid auto-rows-auto gap-y-5">
              <div className="flex justify-center">
                <Member
                  name="Aiden Yoon"
                  position="Treasurer"
                  photoPath="ajsdfjas"
                  pronouns="he/him"
                />
              </div>

              <div className="flex justify-center">
                <Member
                  name="Vivian Choi"
                  position="Webmaster"
                  photoPath="ajsdfjas"
                  pronouns="she/her"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Member
                name="Dana Kim"
                position="Secretary"
                photoPath="ajsdfjas"
                pronouns="she/her"
              />
            </div>
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

      {/* Events */}
      <div className="container mx-auto mb-16" id="events" data-aos="fade-right">
        <h1 className="text-7xl text-white font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text">
            Get involved
          </span>{" "}
          with our events!
        </h1>

        <div className="grid auto-rows-auto gap-y-5 md:px-0 px-8">
          <Event
            name="Boba Drops Workshop"
            date="April 24, 2025"
            finished={false}
            eventType="Workshop"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nam fugit sit veritatis iste, minima quos illo tempore autem quod aperiam non! Ratione tempore illo tenetur porro cum, ullam quisquam!"
          />

          <Event
            name="Scrapyard Busan"
            date="March 15-16, 2025"
            finished={true}
            eventType="Hackathon"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nam fugit sit veritatis iste, minima quos illo tempore autem quod aperiam non! Ratione tempore illo tenetur porro cum, ullam quisquam!"
          />
        </div>
      </div>
    </>
  );
}
