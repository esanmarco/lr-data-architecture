import { Suspense } from "react";
import { Status, useGetStatusColumns } from "../api/board";
import { useGetRequests } from "../api/requests";
import Column from "./components/Column";
import NewRequest from "./modals/NewRequest";
import RequestDetails from "./modals/RequestDetails";

const BoardSkeletonLoader = () => <div>Loading...</div>;

export default function Dashboard() {
  const { data: columns, isLoading: isFetchingColumns } = useGetStatusColumns();
  const { data: requests, isLoading: isFetchingRequests } = useGetRequests();
  const isLoading = isFetchingColumns || isFetchingRequests;

  const requestsByStatus = (status: Status) => {
    return (
      requests?.filter((request) => request.status === status.toLowerCase()) ??
      []
    );
  };

  if (isLoading) {
    return <BoardSkeletonLoader />;
  }

  return (
    <main>
      <h1>Dashboard</h1>
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
      <NewRequest />
      <RequestDetails />
    </main>
  );
}
