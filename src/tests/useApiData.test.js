/* eslint-disable react-hooks/rules-of-hooks */

import axios from "axios";
import useApiData from "../hooks/useApiData";

jest.mock("axios");

describe("useApiData hook function", () => {
  test("returns info about first state in the API is AL - Albama", async () => {
    const url = `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKeyRa}`;

    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          state: "AL",
        },
      ],
    });
    const response = await useApiData(url);
    const { state } = response.data[0];
    expect(state).toContain("AL");
  });
});
