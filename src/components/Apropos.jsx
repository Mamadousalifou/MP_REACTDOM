import { Link, Outlet } from "react-router-dom";

export default function apropos() {
  return (
    <div>
      <h1> A propos</h1>
      <div>
        <Outlet />
      </div>
      <Link to={"/"}> Accuei</Link>
      <Link to={"/apropos/contact"}>Contact</Link>
      <Link to={"/apropos/emploi"}>Emploi</Link>
    </div>
  );
}
