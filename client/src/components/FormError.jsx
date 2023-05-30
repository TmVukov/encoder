const FormError = ({ value, regex, type }) => {
  const isValid = value && value.match(regex);

  return (
    !isValid && (
      <div className="error-container">
        {type === 'email'
          ? 'Please enter valid email.'
          : 'Password should contain at least 6 characters and 1 number.'}
      </div>
    )
  );
};

export default FormError;
