/** @format */

/**
 * Code refactored
 * This is a reusable Function that
 * hold returns an async Function.
 *
 * The async Function runs a try and catch,
 * it then awaits the passed in Function and catches the next()
 *
 */

const asyncWrapper = (func) => {
  return async (req, res, next) => {
    try {
      await func(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = asyncWrapper;
