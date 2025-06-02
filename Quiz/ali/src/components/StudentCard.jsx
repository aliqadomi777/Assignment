import AlertButton from "./AlertButton";
function StudentCard({ name, grade }) {
  const form = grade >= 85;

  return (
    <div>
      <h2>{name}</h2>
      <p>{grade} </p>
      <p>{form ? "Excellent Student" : "Need improvement"} </p>
      <AlertButton message={`${name}-${grade}`} />
    </div>
  );
}

export default StudentCard;
