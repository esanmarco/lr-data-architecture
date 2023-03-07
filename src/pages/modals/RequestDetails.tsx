import { useSearchParams } from "react-router-dom";
import { useGetRequestById } from "../../api/requests";

export default function RequestDetails() {
  const [searchParams] = useSearchParams();
  const modalEnabled =
    Boolean(searchParams.get("modal")) &&
    Boolean(searchParams.get("modalType") === "details");
  const requestId = searchParams.get("requestId") ?? "";

  const fetchEnabled = Boolean(requestId && modalEnabled);
  const { data, isLoading } = useGetRequestById(requestId, fetchEnabled);

  if (!modalEnabled) {
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Request Details</h1>
      {JSON.stringify(data)}
    </div>
  );
}
