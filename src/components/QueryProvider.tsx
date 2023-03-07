import {
  QueryClient,
  QueryClientProvider as InternalQueryProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <InternalQueryProvider client={queryClient}>
      {children}
    </InternalQueryProvider>
  );
}
