const request = require("supertest");
const app = require("../src/app");

describe("API Tests", () => {
  it("GET /tasks - Obtener elementos", async () => {
    const res = await request(app).get("/tasks");
    expect(res.status).toBe(200);
    // Como la respuesta es un arreglo, verificamos que sea efectivamente un array
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("GET /tasks/:id - Obtener un elemento existente", async () => {
    const res = await request(app).get("/tasks/1");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
    expect(res.body).toHaveProperty("name", "Task 1");
  });

  it("GET /tasks/:id - Retornar 404 para elemento no existente", async () => {
    const res = await request(app).get("/tasks/999");
    expect(res.status).toBe(404);
    expect(res.text).toBe("Task not found");
  });
});
