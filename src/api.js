import axios from "axios";

// axios.defaults.headers({
//   Authorization:
//     "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGJkMmNlYjE5NDM0NjU0ZGNlMzNhOTRkMjVhMWFmZiIsIm5iZiI6MTc0NDkwMjcwNS4zMDA5OTk5LCJzdWIiOiI2ODAxMWEzMWU0NzUzNDI1ZWZhZDA5YzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d_wsYRutrexrNfG3VCRNltHKv7VDNNItVGb8r0FPv08",
// });

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGJkMmNlYjE5NDM0NjU0ZGNlMzNhOTRkMjVhMWFmZiIsIm5iZiI6MTc0NDkwMjcwNS4zMDA5OTk5LCJzdWIiOiI2ODAxMWEzMWU0NzUzNDI1ZWZhZDA5YzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d_wsYRutrexrNfG3VCRNltHKv7VDNNItVGb8r0FPv08",
      },
    }
  );
  return response.data;
};

export const fetchMovieSearch = async (query) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
      },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGJkMmNlYjE5NDM0NjU0ZGNlMzNhOTRkMjVhMWFmZiIsIm5iZiI6MTc0NDkwMjcwNS4zMDA5OTk5LCJzdWIiOiI2ODAxMWEzMWU0NzUzNDI1ZWZhZDA5YzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d_wsYRutrexrNfG3VCRNltHKv7VDNNItVGb8r0FPv08",
      },
    }
  );
  return response.data;
};

export const fetchMovieById = async (id) => {
  const response = await axios.get("https://api.themoviedb.org/3/movie/" + id, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGJkMmNlYjE5NDM0NjU0ZGNlMzNhOTRkMjVhMWFmZiIsIm5iZiI6MTc0NDkwMjcwNS4zMDA5OTk5LCJzdWIiOiI2ODAxMWEzMWU0NzUzNDI1ZWZhZDA5YzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d_wsYRutrexrNfG3VCRNltHKv7VDNNItVGb8r0FPv08",
    },
  });
  return response.data;
};

export const fetchMovieCastById = async (id) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/" + id + "/credits",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGJkMmNlYjE5NDM0NjU0ZGNlMzNhOTRkMjVhMWFmZiIsIm5iZiI6MTc0NDkwMjcwNS4zMDA5OTk5LCJzdWIiOiI2ODAxMWEzMWU0NzUzNDI1ZWZhZDA5YzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d_wsYRutrexrNfG3VCRNltHKv7VDNNItVGb8r0FPv08",
      },
    }
  );
  return response.data;
};

export const fetchMovieReviewsById = async (id) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/" + id + "/reviews",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGJkMmNlYjE5NDM0NjU0ZGNlMzNhOTRkMjVhMWFmZiIsIm5iZiI6MTc0NDkwMjcwNS4zMDA5OTk5LCJzdWIiOiI2ODAxMWEzMWU0NzUzNDI1ZWZhZDA5YzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d_wsYRutrexrNfG3VCRNltHKv7VDNNItVGb8r0FPv08",
      },
    }
  );
  return response.data;
};
