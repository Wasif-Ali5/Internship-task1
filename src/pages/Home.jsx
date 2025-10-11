import { Link } from "react-router-dom";
import data from "../data/data";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Student Management System</h1>
      <p className="mb-4">Here are a few students (preview):</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.slice(0, 3).map((stu) => (
          <div
            key={stu.id}
            className="border rounded p-4 shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">{stu.name}</h2>
            <p>Class: {stu.class}</p>
            <Link
              to={`/students/${stu.id}`}
              className="text-blue-600 underline mt-2 block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link to="/students" className="text-blue-600 underline">
          View All Students
        </Link>
      </div>
    </div>
  );
}
