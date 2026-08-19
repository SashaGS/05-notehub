import { useMutation, useQueryClient } from '@tanstack/react-query';
import css from './NoteForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from 'formik';
import { addNote } from '../../services/noteService';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

interface NoteFormProps {
  onClose: () => void;
}

function NoteForm({ onClose }: NoteFormProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addNote,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      onClose();
    },
    onError(error) {
      toast(`Error adding note ${error}`);
    },
  });
  const fieldId = useId();

  interface NoteFormValues {
    title: string;
    content: string;
    tag: string;
  }

  const initialValues: NoteFormValues = {
    title: '',
    content: '',
    tag: '',
  };

  const handleSubmit = (
    values: NoteFormValues,
    actions: FormikHelpers<NoteFormValues>
  ) => {
    mutate({ ...values });
    actions.resetForm();
  };

  const NoteFormSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .matches(/^[A-ZА-Я]/, 'The name must start with a capital letter.')
      .required('required'),
    content: Yup.string()
      .min(5, 'content must be at least 5 characters')
      .required('content required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={NoteFormSchema}
    >
      <Form className={css.form}>
        <fieldset>
          <div className={css.formGroup}>
            <label htmlFor={`${fieldId}-title`}>Title</label>
            <Field id="title" type="text" name="title" className={css.input} />
            <ErrorMessage name="title" component="span" className={css.error} />
            <span data-name="title" className={css.error} />
          </div>

          <div className={css.formGroup}>
            <label htmlFor={`${fieldId}-content`}>Content</label>
            <Field
              id="content"
              name="content"
              as="textarea"
              rows={8}
              className={css.textarea}
            />
            <span data-name="content" className={css.error} />
            <ErrorMessage
              name="content"
              component="span"
              className={css.error}
            />
          </div>

          <div className={css.formGroup}>
            <label htmlFor={`${fieldId}-tag`}>Tag</label>
            <Field as="select" id="tag" name="tag" className={css.select}>
              <option value="Todo">Todo</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Meeting">Meeting</option>
              <option value="Shopping">Shopping</option>
            </Field>
            <span data-name="tag" className={css.error} />
            {/* <ErrorMessage name="tag" component="span" className={css.error} /> */}
          </div>
        </fieldset>
        <fieldset>
          <div className={css.actions}>
            <button
              type="button"
              className={css.cancelButton}
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className={css.submitButton} disabled={false}>
              Create note
            </button>
          </div>
        </fieldset>
      </Form>
    </Formik>
  );
}

export default NoteForm;
