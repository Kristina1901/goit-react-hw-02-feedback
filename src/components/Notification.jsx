import PropTypes from 'prop-types';
import s from '../css/Notification.module.css';
export default function Section({ message }) {
  return <div className={s.message}>{message}</div>;
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
