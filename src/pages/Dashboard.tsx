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
    return (
      requests?.filter((request) => request.status === status.toLowerCase()) ??
      []
    );
  };

  return (
    <main>
      <h1>Dashboard</h1>
      <Suspense fallback={<BoardSkeletonLoader />}>
        <div className="grid grid-cols-4 mt-8 gap-3">
          {columns?.map((column, i) => {
            return (
              <Column
                key={`${column}-${i}`}
                type={column}
                requests={requestsByStatus(column)}
              />
            );
          })}
        </div>
      </Suspense>
      <NewRequest />
      <RequestDetails />
    </main>
  );
}
