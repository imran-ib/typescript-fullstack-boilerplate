import * as bcrypt from "bcryptjs";

const Hash = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export default Hash;
