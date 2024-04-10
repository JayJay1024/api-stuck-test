export async function GET(request: Request) {
  const timeout = Number(new URL(request.url).searchParams.get("timeout") || "NaN");

  if (!Number.isNaN(timeout)) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Response.json({ timeout: timeout }));
      }, timeout);
    });
  }

  return new Promise<Response>(() => {});
}
