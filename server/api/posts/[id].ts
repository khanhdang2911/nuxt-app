export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "Post ID is required",
    });
  }
  const post = await $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!post) {
    throw createError({
      statusCode: 404,
      statusMessage: "Post not found",
    });
  }
  return post;
});
