import { useParams } from "react-router-dom";

export default function Article() {
  const { id } = useParams();
  return (
    <>
      <h3>Article avec id {id}</h3>
    </>
  );
}
