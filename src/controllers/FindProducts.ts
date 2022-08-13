import { prisma } from "@prisma/client";
import { Request, Response } from "express";
import { database } from "../database";

export class FindProductsController {
  async handle(request: Request, response: Response) {
    const {
      search,
      take,
      skip
    } = request.query;

    const result = await database.product.findMany({
      where: {
        name: {
          contains: String(search),
          mode: 'insensitive'
        },
      },
      take: Number(take),
      skip: Number(skip)
    });

    return response.json(result)
  }
}