import { useParams, useNavigate } from "react-router-dom";
import studentsData from "../data/data";

export default function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = studentsData.find((stu) => stu.id === parseInt(id));

  if (!student) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Student not found</h2>
        <button
          onClick={() => navigate("/students")}
          className="text-blue-600 underline"
        >
          Back to Students
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Details of {student.name}</h2>
      <div className="space-y-2">
        <p><span className="font-semibold">ID:</span> {student.id}</p>
        <p><span className="font-semibold">Name:</span> {student.name}</p>
        <p><span className="font-semibold">Age:</span> {student.age}</p>
        <p><span className="font-semibold">Class:</span> {student.class}</p>
        <p><span className="font-semibold">Grade:</span> {student.grade}</p>
      </div>
      <div className="mt-4">
        <button
          onClick={() => navigate("/students")}
          className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
        >
          Back to Students
        </button>
      </div>
    </div>
  );
}
