import { Link } from "react-router-dom";

export default function Footer() {
  return (
        <footer>
            <p>&copy; Samih Habbani 2022</p>
            {/* <a href="#">About</a> */}
            <Link to="about">About</Link>
        </footer>
    );
}
