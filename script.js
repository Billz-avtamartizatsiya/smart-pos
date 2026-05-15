function sendToTelegram(text) {
  let token = "8866953084:AAExmoeRPGBPUCrbNos-0fVR-FJW-GpgJL0";
  let chat_id = "5206100660";

  let url =
  "https://api.telegram.org/bot" +
  token +
  "/sendMessage?chat_id=" +
  chat_id +
  "&text=" +
  encodeURIComponent(text);

  fetch(url)
    .then(res => console.log("OK"))
    .catch(err => console.log("ERROR:", err));
}
