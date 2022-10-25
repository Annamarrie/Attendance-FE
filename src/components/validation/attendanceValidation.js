const validationSchema = (values) => {
  const errors = {};
  const { EntranceDate, EntranceTime, EntranceExitTime } = values;

  if (!EntranceDate) {
    errors.EntranceDate = "Please enter a EntranceDate";
  }
  if (!EntranceTime) {
    errors.EntranceTime = "Please enter a EntranceTime";
  }
  if (!EntranceExitTime) {
    errors.EntranceExitTime = "Please enter a EntranceExitTime";
  }

  return errors;
};
export default validationSchema;
