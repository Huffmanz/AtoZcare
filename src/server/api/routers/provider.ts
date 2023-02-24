import { z } from "zod";
import {createTRPCRouter, protectedProcedure} from "~/server/api/trpc";

export const providerRouter = createTRPCRouter({
    get: protectedProcedure
    .input(z.object({providerId: z.string()}))
    .query(({ ctx}) => {
        return ctx.prisma.providerInfo.findFirst({
            where: {
                userId: ctx.session.user.id,
            }
        })
      }),
    create: protectedProcedure
    .input(z.object({
        providerName: z.string(),
        address1: z.string(),
        address2: z.string(),
        address3: z.string(),
        city: z.string(),
        state: z.string(),
        zip: z.string()
    }))
    .mutation(async ({ctx, input}) => {
        return ctx.prisma.providerInfo.create({
            data:{
                DaycareName: input.providerName,
                Address1: input.address1,
                Address2: input.address2,
                Address3: input.address3,
                City: input.city,
                State: input.state,
                Zip: input.zip,
                userId: ctx.session.user.id,
            }
        })
    }),
})
