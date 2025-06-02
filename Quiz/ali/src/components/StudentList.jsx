import StudentCard from "./StudentCard";
function StudentList({ dataList }) {
  return (
    <div>
      {dataList.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          grade={student.grade}
        />
      ))}
    </div>
  );
}
export default StudentList;
