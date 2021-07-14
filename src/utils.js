const imageApi = process.env.REACT_APP_API_BASE_IMAGE_URL;

export const getBackdropUrl = (path) => `${imageApi}${path}`;


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const parseDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate()
  const month = months[date.getMonth() + 1]
  const year = date.getFullYear()
  return `${month} ${day}, ${year}`
} 