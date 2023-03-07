import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem.
      </p>
      <p>Go to the <Link to="/">HomePage</Link></p>
    </div>
  );
}
