function AlertButton({ message }) {
  const handClick = () => {
    alert(message);
  };
  return <button onClick={handClick}>Show it</button>;
}
export default AlertButton;
