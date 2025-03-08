const {z} = require("zod");

/*const loginSchema = z.object({
    email: z
      .string({ required_error: "Email is required" })
      .trim()
      .email({ message: "Invalid email address" })
      .min(3, { message: "Email must be at least of 3 characters" })
      .max(255, { message: "Email must not be more than 255 characters" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(7, { message: "Password must be at least of 6 characters" })
      .max(1024, "Password can't be greater than 1024 characters"),
  });*/

const signupSchema = z.object({
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3, { message: "Name must be at least 3 character"})
    .max(255, { message: "Name must not be more than 255 character"}),
    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message:"invalid email address"})
    .min(3, { message: "email must be at least 3 character"})
    .max(255, { message: "email must not be more than 255 character"}),
    phone: z
    .string({required_error: "Phpne is required"})
    .trim()
    .min(10, { message: "phone must be at least 10 character"})
    .max(255, { message: "phone must not be more than 20 character"}),
    password: z
    .string({required_error: "Name is required"})
    .trim()
    .min(7, { message: "password must be at least 6 character"})
    .max(1024, { message: "password can not be generate than 1024 character"}),
});

module.exports = signupSchema;