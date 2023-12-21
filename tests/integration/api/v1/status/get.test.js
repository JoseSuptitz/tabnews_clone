test("GET to api/v1/status/ should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const ResponseBody = await response.json();

  const parsedUpdatedAt = new Date(ResponseBody.updated_at).toISOString();
  expect(ResponseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(ResponseBody.dependencies.database.version).toEqual("16.0");

  expect(ResponseBody.dependencies.database.max_connections).toEqual(100);

  expect(ResponseBody.dependencies.database.opened_connections).toEqual(1);
});
