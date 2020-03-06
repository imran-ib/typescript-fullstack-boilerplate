import * as crypto from "crypto";

function resetPasswordToken() {
  return crypto.randomBytes(64).toString("hex");
}
function validateEmailToken() {
  return crypto.randomBytes(64).toString("hex");
}

export default { resetPasswordToken, validateEmailToken };
