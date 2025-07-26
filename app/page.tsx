import { prisma } from "./utils/db";

const getData = async () => {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imgUrl: true,
      authorImg: true,
      authorName: true,
      id: true,
      createdAt: true,
    },
  });
  return data;
};

const page = async () => {
  const data = await getData();
  return (
    <div className="py-6 flex flex-col">
      <h1 className="text-3xl font-semibold tracking-tight">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default page;
