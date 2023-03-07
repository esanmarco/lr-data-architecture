import { Suspense } from "react";
import { Status, useGetStatusColumns } from "../api/board";
import { useGetRequests } from "../api/requests";
import Column from "./components/Column";
import NewRequest from "./modals/NewRequest";
import RequestDetails from "./modals/RequestDetails";

const BoardSkeletonLoader = () => <div>Loading...</div>;

export default function Dashboard() {
  const { data: columns } = useGetStatusColumns();
  const { data: requests } = useGetRequests();

  const requestsByStatus = (status: Status) => {
    return requests?.filter((request) => request.status === status) ?? [];
  };

  return (
    <main>
      <h1>Dashboard</h1>
      <Suspense fallback={<BoardSkeletonLoader />}>
        {columns?.map((column, i) => {
          return (
            <Column
              key={`${column}-${i}`}
              requests={requestsByStatus(column)}
            />
          );
        })}
      </Suspense>
      <NewRequest />
      <RequestDetails />
    </main>
  );
}
``;
