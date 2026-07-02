function getButtonStyling(styleType) {
  if (styleType === "primary") {
    return "bg-blue-600 border-blue-600 text-white hover:bg-blue-700";
  } else if (styleType === "secondary") {
    return "bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200";
  } else if (styleType === "success") {
    return "bg-green-600 border-green-600 text-white hover:bg-green-700";
  } else if (styleType === "warning") {
    return "bg-yellow-500 border-yellow-500 text-white hover:bg-yellow-600";
  } else if (styleType === "error") {
    return "bg-red-600 border-red-600 text-white hover:bg-red-700";
  } else {
    return "bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200";
  }
}

export default getButtonStyling;
