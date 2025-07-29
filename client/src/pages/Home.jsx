import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(stored);
  }, []);

   const handleDelete = (id) => {
      const updated = courses.filter((s) => s.id !== id);
      localStorage.setItem("courses", JSON.stringify(updated));
      setCourses(updated);
    };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {courses.length === 0 ? (
        <p>No courses added yet.</p>
      ) : (
        courses.map((s) => <CourseCard key={s.id} course={s} onDelete={handleDelete} />)
      )}
    </div>
  );
}
export default Home;