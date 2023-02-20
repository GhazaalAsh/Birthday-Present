function present() {
  let bodyElement = document.querySelector("#body");
  bodyElement.classList.remove("body");
  bodyElement.classList.add("present-body");
  let containerElement = document.querySelector("#container");
  containerElement.classList.remove("container");
  containerElement.classList.add("present-container");
  let textElement = document.querySelector("#container");
  textElement.innerHTML = ``;
  textElement.innerHTML = `<p class="present-text">
  ...
  <br/>
      Birini sevdiğinde ve onunla özel bir an paylaştığında, ruhunun bir
      parçası o anı hep o yerde yaşayacağı söylenir. Tüm ruh parçalarımın her
      zaman sana bağlı olmasını diliyorum. Seni bulduğum ve sevdiğim için çok
      mutluyum. Sana dünyanın tüm güzel ve huzurlu anlarını diliyorum. Doğum
      günün kutlu olsun aşkım.
      <br />
      <span class="love"> Seni çok seviyorum </span>
      <br />
      <span class="name"> ..Ghazal.. </span>
    </p>`;
}
let buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", present);
