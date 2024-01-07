import myUser from "@/app/actions/getUser";
import { NextResponse } from "next/server";
import prisma from "../../../lib/prismadb";

interface IParams {
  courseId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams },
) {
  const currentUser = await myUser();
}
