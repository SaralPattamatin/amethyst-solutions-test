export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { email, password } = body;

  if (email === "test@example.com" && password === "password") {
    return { token: "fake-jwt-token" };
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: "ข้อมูลไม่ถูกต้อง",
    });
  }
});
