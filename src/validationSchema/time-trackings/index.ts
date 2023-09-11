import * as yup from 'yup';

export const timeTrackingValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  date: yup.date().required(),
  hours_worked: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
