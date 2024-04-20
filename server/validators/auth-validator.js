const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Username is required!" })
    .trim()
    .min(3, { message: "Username must be if atleast 3 char!" })
    .max(255, { message: "Username cannot be longer than 255 char!" }),

  email: z
    .string({ required_error: "Email is required!" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "email must be if atleast 3 char!" })
    .max(255, { message: "email cannot be longer than 255 char!" }),

  phone: z
    .string({ required_error: "Phone is required!" })
    .trim()
    .min(8, { message: "phone must be if atleast 3 char!" })
    .max(8, { message: "phone cannot be longer than 8 char!" }),

  password: z
    .string({ required_error: "Password is required!" })
    .trim()
    .min(3, { message: "Password must be if atleast 3 char!" })
    .max(255, { message: "Password cannot be longer than 255 char!" }),
});

module.exports = signupSchema;
