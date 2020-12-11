import { getUserId } from "../utils";
const Author = {
  book: (parent, args, { request, prisma }, info) => {
    const userId = getUserId(request);
    return prisma.authors
      .findOne({
        where: {
          id: parent.id,
        },
      })
      .books();
  },
  register_by: (parent, args, { request, prisma }, info) => {
    const userId = getUserId(request);
    return prisma.authors
      .findOne({
        where: {
          id: parent.id,
        },
      })
      .users();
  },
};

export default Author;
