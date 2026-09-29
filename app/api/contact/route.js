export async function POST(request) {
  const data = await request.json();
  console.log("New contact form submission:", data);
  return Response.json({ ok: true });
}
