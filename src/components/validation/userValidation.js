const validationSchema = (values) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const errors = {};
  const { email, password, username, position, age } = values;
  if (email.trim() === "") {
    errors.email = "Email is required";
  }
  if (password.trim() === "") {
    errors.password = "Password is required";
  }
  if (username.trim() === "") {
    errors.username = "username is required";
  }

  if (position.trim() === "") {
    errors.position = "position is required";
  }

  if (age.trim() === "") {
    errors.age = "age is required";
  }

  if (password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!emailRegex.test(email)) {
    errors.email = "Enter valid email";
  }

  if (username.length < 3) {
    errors.username = "username must be at least 3 characters";
  }

  if (position.length < 3) {
    errors.position = "position must be at least 3 characters";
  }

  if (age.length < 2) {
    errors.age = "age should be above 1";
  }
  return errors;
};
export default validationSchema;
