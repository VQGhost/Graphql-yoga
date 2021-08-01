import { getUserId } from "../utils";
const Query = {
  hello(parent, arg, ctx, info) {
    const { name } = arg;
    return `hello ${name || "world"}`;
  },
  quantity: () => 1,
  user: (parent, { id }, { request, prisma }, info) => {
    const userId = getUserId(request);

    if (!id) {
      return prisma.users.findMany();
    }
    return prisma.users.findMany({
      where: {
        id: Number(id),
      },
    });
  },
  author: (parent, { id, first, skip, orderBy }, { request, prisma }, info) => {
    const userId = getUserId(request);
    if (!id) {
      return prisma.authors.findMany({
        first,
        skip,
        orderBy,
      });
    }
    return prisma.authors.findMany({
      where: {
        id: Number(id),
      },
    });
  },
  book: (parent, { id, take, skip, orderBy }, { request, prisma }, info) => {
    const userId = getUserId(request);
    if (!id) {
      return prisma.books.findMany({
        take,
        skip,
        orderBy,
      });
    }
    return prisma.books.findMany({
      where: {
        id: Number(id),
      },
    });
  },
};
export default Query;
