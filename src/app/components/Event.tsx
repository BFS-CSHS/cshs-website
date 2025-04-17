import { FaRegCalendar } from "react-icons/fa";
import Button from "./Button";

interface EventProps {
  name: string;
  date: string;
  finished: boolean;
  description: string;
  eventType: string; // e.g., "Hackathon", "Workshop"
}

export default function Event({
  name,
  date,
  finished,
  description,
  eventType,
}: EventProps) {
  return (
    <div className="py-5 px-8 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl font-bold">{name}</h2>
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${
            finished ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
          }`}
        >
          {finished ? "Finished" : "Upcoming"}
        </span>
      </div>
      <p className="flex items-center text-sm mb-2 text-gray-600">
        <FaRegCalendar className="mr-1" />
        {date}
      </p>
      <p className="text-lg text-gray-700 mb-2">{description}</p>
      <p className="text-xs text-gray-500 uppercase mb-5">{eventType}</p>
      <Button color="blue">Learn More</Button>
    </div>
  );
}
