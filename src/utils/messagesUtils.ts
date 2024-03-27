export const getMessageTitle = (newMessage: string, titleCount = 4) => {
  const titleWordsList = newMessage.split(" ").slice(0, titleCount);
  return `${
    titleWordsList.length < titleCount
      ? newMessage
      : titleWordsList.join(" ") + " ..."
  }`;
};
