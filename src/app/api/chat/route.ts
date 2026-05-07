import { streamText } from "ai";
import { google } from "@ai-sdk/google";
import { readFileSync } from "fs";
import { join } from "path";

export async function POST(request: Request) {
  const { messages } = await request.json();

  const systemPrompt = readFileSync(
    join(process.cwd(), "content/persona.md"),
    "utf-8",
  );

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: systemPrompt,
    messages,
  });

  return result.toTextStreamResponse();
}
