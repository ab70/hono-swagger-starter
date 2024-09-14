import { createRoute } from "@hono/zod-openapi";

// Utility function to generate GET routes
const commonResponses = {
    200: {
        description: "Success",
    },
};

export const setGetRoute = (path: string, tags: string[] = []) => {
    return createRoute({
        tags,
        method: "get",
        path,
        responses: commonResponses
    });
};