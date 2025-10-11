import { useState } from "react";
import { Link } from "react-router-dom";
import studentsData from "../data/data";

export default function Students() {
  // initialize state from mock data
  const [students, setStudents] = useState(studentsData);

  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((stu) => stu.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Students Page</h1>
      {students.length === 0 ? (
        <p>No Data Found</p>
      ) : (
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Class</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu.id}>
                <td className="border px-4 py-2">{stu.id}</td>
                <td className="border px-4 py-2">{stu.name}</td>
                <td className="border px-4 py-2">{stu.class}</td>
                <td className="border px-4 py-2 space-x-2">
                  <Link
                    to={`/students/${stu.id}`}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(stu.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
