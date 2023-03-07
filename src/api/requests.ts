import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const mockResponse = [
  {
    id: "1",
    name: "Customer Payment Dispute",
    description: "Dispute over termination letter",
    due: "2021-01-01",
    status: "intake",
  },
];

export type Request = typeof mockResponse[number];
export type NewRequest = Omit<Request, "id">;

export function useGetRequests() {
  return useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      // TODO: update to real API
      return mockResponse;
    },
  });
}

export function useGetRequestById(id: string, enabled?: boolean) {
  return useQuery({
    queryKey: ["requests", id],
    queryFn: async () => {
      // TODO: update to real API
      return mockResponse;
    },
    enabled: enabled ?? true,
  });
}

export function useAddNewRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["request", "new"],
    mutationFn: async (request: NewRequest) => {
      // TODO: update to real API
    },
    onSuccess: () => {
      // causes the "all-requests" query to be refetched
      queryClient.invalidateQueries(["all-requests"]);
    },
  });
}
