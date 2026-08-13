import css from './Modal.module.css';

function Modal(params: type) {
  return (
    <div className={css.backdrop} role="dialog" aria-modal="true">
      <div className={css.modal}>{/* */}</div>
    </div>
  );
}

export default Modal;
