"use strict";

/**
 * Get unique error field name
 */

const uniqueMessage = (error) => {
  let output;

  try {
    const fieldName = Object.keys(error.err.keyPattern)[0];

    output = fieldName + " already exists!";
  } catch (ex) {
    output = "Unique fields already exists";
  }

  return error;
};

/**
 * Get the error message from error object
 */

exports.errorHandler = (error) => {
  let message = "";
  if (error.code) {
    switch (error.code) {
      case 11000:
      case 11001:
        message = uniqueMessage(error);
        break;
      default:
        message = "Something went wrong";
    }
  } else {
    for (let errorName in error.errors) {
      if (error.errors[errorName].message)
        message = error.errros[errorName].message;
    }
  }

  return message;
};
