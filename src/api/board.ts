import { useQuery } from "@tanstack/react-query";

const mockStatuses = ["Intake", "To Do", "Blocked", "Done"];
export type Status = typeof mockStatuses[number];

export function useGetStatusColumns() {
  return useQuery({
    queryKey: ["status-columns"],
    queryFn: async () => {
      // TODO: update to real API
      return mockStatuses;
    },
  });
}
