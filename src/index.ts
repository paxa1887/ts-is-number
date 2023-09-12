/**
 * Checks if the input value is a valid finite number or a string that can be converted to a valid finite number.
 *
 * @param num - The input parameter which can be a string or number.
 * @returns Returns `true` if the input is a valid finite number or a string that can successfully be converted to a valid finite number, otherwise returns `false`.
 * @example
 * isValidNumber(123) // returns true
 * isValidNumber('123') // returns true
 * isValidNumber('123a') // returns false
 * isValidNumber(NaN) // returns false
 * isValidNumber(undefined) // returns false
 */
export default function isValidNumber(num: string | number | boolean | object | null | undefined): boolean {
  // Check if the input is of type 'number' and is not NaN and is a finite number
  if (typeof num === 'number') {
    return !isNaN(num) && Number.isFinite(num);
  }

  // Check if the input is of type 'string'
  if (typeof num === 'string') {
    const trimmedNum = num.trim();

    // Ensure the trimmed string is not empty and can be converted to a finite number
    return trimmedNum !== '' && Number.isFinite(Number(trimmedNum));
  }

  // Return false for all other input types
  return false;
}
