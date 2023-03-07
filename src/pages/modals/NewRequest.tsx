import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAddNewRequest } from "../../api/requests";

export default function NewRequest() {
  const { mutate } = useAddNewRequest();
  const [form, setForm] = useState<any>();
  const [searchParams] = useSearchParams();
  const modalEnabled =
    Boolean(searchParams.get("modal")) &&
    Boolean(searchParams.get("modalType") === "newRequest");

  if (!modalEnabled) {
    return null;
  }

  return (
    <div className="modal">
      <form onSubmit={() => mutate(form)}>
        {/** new request form goes here */}
        <input type="submit" />
      </form>
    </div>
  );
}
