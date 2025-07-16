import CourseCard from "../components/CourseCard";

const dummyCourse = [
    {
        id: 1,
        name: "Python",
        code: "12345",
        instructor: "Dr.gopi",
        credits: "4",
    },
    {
        id: 2,
        name: "Data Structure",
        code: "67890",
        instructor: "Dr.muthu",
        credits: "5",
    },
]

function Home() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dummyCourse.map((course) => 
                <CourseCard key={course.id} course={course} />
            )}
        </div>
    )
}

export default Home