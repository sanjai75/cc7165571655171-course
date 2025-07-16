function CourseCard({ course }) {
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
        </div>
    );
}

export default CourseCard;