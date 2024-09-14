import { createRoute, z } from "@hono/zod-openapi";
import { setGetRoute } from "../../utils/swagger/get";
import app from "../../app";
import testController from "../../controllers/user/userController";


app.openapi(setGetRoute("/user", ["Auth"]), testController().test);
// User signup




// const route = createRoute({
//     tags: ["Auth"],
//     method: "get",
//     path: "/user",
//     // request: {
//     //     body: {
//     //         content: {
//     //             "application/json": {
//     //                 schema: z.object({
//     //                     title: z.string().min(3),
//     //                     category: z.string().min(3),
//     //                 }),
//     //             },
//     //         },
//     //         description: "Todo create inputs",
//     //         required: true,
//     //     },
//     // },
//     responses: {
//         200: {
//             // content: {
//             //   "application/json": {
//             //     // schema: createSuccessResponseSchema(TodoSchema),
//             //   },
//             // },
//             description: "Auth",
//         },
//     },
// });

// app.openapi(route, testController().test)