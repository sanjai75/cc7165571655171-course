import { useState } from "react";
function CourseForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    code: "",
    instructor: "",
    credits: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.roll) return alert("Name & Code are required");
    onAdd({ ...form, id: Date.now() });
     setForm({ name: "", code: "", instructor: "", credits: "" });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 shadow-md rounded-xl max-w-md mx-auto"
    >
      {" "}
      <h2 className="text-xl font-semibold mb-4">Add New Course</h2>{" "}
      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="name"
        placeholder="Course Name"
        value={form.name}
        onChange={handleChange}
      />{" "}
      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="code"
        placeholder="Code Number"
        value={form.code}
        onChange={handleChange}
      />{" "}
      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="instructor"
        placeholder="Instructor"
        value={form.instructor}
        onChange={handleChange}
      />{" "}
      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="credits"
        placeholder="Credits"
        value={form.credits}
        onChange={handleChange}
      />{" "}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        {" "}
        Add Course{" "}
      </button>{" "}
    </form>
  );
}
export default CourseForm; 