const cohort = "2211-FTB-ET-WEB-FT";

////////// this gives us all the active posts to work up and render \\\\\\\\\\
export const FetchPosts = async () => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/${cohort}/posts`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      }
    );

    const result = await response.json();

    console.log(result.data.posts);
    return result.data.posts;
  } catch (error) {
    console.error(error);
  }
};
