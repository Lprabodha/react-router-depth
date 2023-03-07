import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetail() {
  const { id } = useParams();
  const career = useLoaderData();

  console.log(career);

  return (
    <div className="career-detail">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary : {career.salary}</p>
      <p>Location : {career.location}</p>
      <div className="details">
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </p>
      </div>
    </div>
  );
}

// careers Details

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error(`Could not find that career`);
  }

  return res.json();
};
