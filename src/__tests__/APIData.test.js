import APIData from "../pages/Raghad";

describe("APIData fucntion", () => {
  test("should returns the correct data", () => {
    const data = APIData();
    expect(data).toContain({
      state: "OR",
    });
  });
});
