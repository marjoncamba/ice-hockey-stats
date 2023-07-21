import { NextResponse } from "next/server";

import data from "@/config/data.json";

export function GET() {
  const games = data.games;
  return NextResponse.json(
    {
      code: 200,
      success: false,
      games,
    },
    { status: 200 }
  );
}
