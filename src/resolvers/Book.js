import { getUserId } from "../utils";
const Book = {
  writted_by: (parent, args, { request, prisma }, info) => {
    const userId = getUserId(request);
    return prisma.books
      .findFirst({
        where: {
          id: parent.id,
        },
      })
      .authors();
  },
  register_by: (parent, args, { request, prisma }, info) => {
    const userId = getUserId(request);
    return prisma.books
      .findFirst({
        where: {
          id: parent.id,
        },
      })
      .users();
  },
};
export default Book;
