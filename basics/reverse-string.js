const reverse = (str) => {
  if (str === "") return "";

  let reversed = "";

  return reversed = str[str.length-1] + reverse(str.substring(0, str.length-1));
};


console.log(reverse("barış"));