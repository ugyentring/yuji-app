const { z } = require("zod");

// Define the schema for the contact form data
const contSchema = z.object({
  username: z
    .string({ required_error: "Username is required!" })
    .trim()
    .min(3, { message: "Username must be at least 3 characters!" })
    .max(255, { message: "Username cannot be longer than 255 characters!" }),

  email: z
    .string({ required_error: "Email is required!" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters!" })
    .max(255, { message: "Email cannot be longer than 255 characters!" }),

  message: z
    .string({ required_error: "Message is required!" })
    .trim()
    .min(3, { message: "Message must be at least 3 characters!" })
    .max(100, { message: "Message cannot be longer than 100 characters!" }),
});

module.exports = contSchema;
