import { Link, useNavigate } from 'react-router-dom';
function CourseCard({ course, onDelete}) {
  const navigate=useNavigate();
    return (
        <div className="bg-white shadow-md rounded-xl p-4 text-gray-800">
            <h2 className="text-xl font-semibold">{course.name}</h2>
            <p>
                <strong>Code: </strong>{course.code}
            </p>
            <p>
                <strong>Instructor: </strong>{course.instructor}
            </p>
            <p>
                <strong>Credits: </strong>{course.credits}
            </p>
            <div className="mt-4 flex gap-3">
        <button
          onClick={() => navigate(`/edit/${course.id}`)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(course.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
    );
}

export default CourseCard;