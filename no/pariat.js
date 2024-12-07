 */
function parseScale(data) {
  // Extract and process scale configuration from the data.
  const scaleConfig = {}; // Assume some processing here

  // Further processing of scaleConfig...
  
  return scaleConfig;
}

// In parseScale, which happens before parseData. Thus the original data
// must be processed by parseScale first to configure scales correctly.
const scaleConfig = parseScale(rawData);

/**
 * Parses the main data after the scale has been configured.
 *
 * @param {Object} data - The raw data object, potentially modified by parseScale.
 * @param {Object} scaleConfig - The configuration for scales derived from parseScale.
 * @returns {Array} - The parsed data array.
 *
 * Example usage:
 * 