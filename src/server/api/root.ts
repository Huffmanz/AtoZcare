import { createTRPCRouter } from "~/server/api/trpc";
import { providerRouter } from "./routers/provider";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    provider: providerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
