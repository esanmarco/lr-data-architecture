import { Request } from "../api/requests";

export default function Column({ requests }: { requests: Request[] }) {
  return (
    <div>
      {requests?.map((request) => {
        return <QuickCard key={request.id} {...request} />;
      })}
    </div>
  );
}

const QuickCard = ({ name, description, status }: Request) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{status}</p>
    </div>
  );
};
