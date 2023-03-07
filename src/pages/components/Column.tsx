import { Status } from "../../api/board";
import { Request } from "../../api/requests";

export default function Column({
  requests,
  type,
}: {
  requests: Request[];
  type: Status;
}) {
  return (
    <div>
      <div className="flex flex-row gap-2 items-center shadow rounded p-2">
        <h3>{type}</h3>
        <span>{requests.length}</span>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        {requests?.map((request) => {
          return <QuickCard key={request.id} {...request} />;
        })}
      </div>
    </div>
  );
}

const QuickCard = ({ name, description, status }: Request) => {
  return (
    <div className="shadow p-4 rounded">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{status}</p>
    </div>
  );
};
