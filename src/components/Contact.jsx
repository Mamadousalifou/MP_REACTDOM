import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Contact() {
  return (
    <div>
      <h1> Contact</h1>
      <form
        className="d-flex-c vh-100 bg-primary justify-content-center align-items-center"
        action=""
      >
        <label htmlFor="">Nom </label>
        <input type="text"></input>
        <label htmlFor="">Email </label>
        <input type="email"></input>
        <textarea name="message" id="message" cols={30} rows={10}></textarea>
        <button type="submit">Envoyer</button>
      </form>

      <NavLink to={"/apropos"}> A propos</NavLink>
      <NavLink to={"/contact"}> Contact </NavLink>
    </div>
  );
}
