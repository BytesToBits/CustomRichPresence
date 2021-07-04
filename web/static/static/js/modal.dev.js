"use strict";

var modal = {
  screen: document.getElementById("modal"),
  box: document.getElementById("modalBox"),
  header: document.getElementById("modalHeader"),
  desc: document.getElementById("modalDesc"),
  close: document.querySelector("button[role='modalClose']")
};
modal.close.addEventListener('click', function () {
  modal.screen.style.display = "none";
  modal.screen.style.opacity = "0%";
  modal.box.style.top = "-50%";
});
var helpModals = {
  client: document.querySelector('i[modal="clientMod"]'),
  state: document.querySelector('i[modal="stateMod"]'),
  details: document.querySelector('i[modal="detailsMod"]'),
  largeImg: document.querySelector('i[modal="largeImgMod"]'),
  smallImg: document.querySelector('i[modal="smallImgMod"]'),
  button: document.querySelector('i[modal="buttonMod"]')
};
helpModals.client.addEventListener('click', function () {
  modal.header.innerText = "Client ID";
  modal.desc.innerHTML = "Go to <strong>Discord Developers > Applications</strong> and create a new application. Head over to the <strong>OAuth2</strong> tab, grab the <strong>Client ID</strong> and paste it in the input field.";
  modal.screen.style.display = "block";
  setTimeout(function () {
    modal.screen.style.opacity = "100%";
    setTimeout(function () {
      modal.box.style.top = "30px";
    }, 100);
  }, 100);
});
helpModals.state.addEventListener('click', function () {
  modal.header.innerText = "State Field";
  modal.desc.innerHTML = 'Enter the state the Presence will show. Must be more than 2 characters!<br>(Example: "Looking to Play", "Playing Solo", "In a Group")';
  modal.screen.style.display = "block";
  setTimeout(function () {
    modal.screen.style.opacity = "100%";
    setTimeout(function () {
      modal.box.style.top = "30px";
    }, 100);
  }, 100);
});
helpModals.details.addEventListener('click', function () {
  modal.header.innerText = "Details Field";
  modal.desc.innerHTML = 'What the player is currently doing. Must be more than 2 characters!<br>(Example: "Competitive - Captain\'s Mode", "In Queue", "Unranked PvP")';
  modal.screen.style.display = "block";
  setTimeout(function () {
    modal.screen.style.opacity = "100%";
    setTimeout(function () {
      modal.box.style.top = "30px";
    }, 100);
  }, 100);
});
helpModals.largeImg.addEventListener('click', function () {
  modal.header.innerText = "Large Image Field";
  modal.desc.innerHTML = 'Name and Tooltip of the image for the large profile artwork. The name must be the same as the one uploaded to the <strong>Rich Presence</strong> tab on your <strong>Developer Application</strong>.<br><br>To upload one, go to <strong>Discord Developers > Applications > Your Application > Rich Presence > Art Assets</strong>, and upload a <strong>Rich Presence Asset</strong>!';
  modal.screen.style.display = "block";
  setTimeout(function () {
    modal.screen.style.opacity = "100%";
    setTimeout(function () {
      modal.box.style.top = "30px";
    }, 100);
  }, 100);
});
helpModals.smallImg.addEventListener('click', function () {
  modal.header.innerText = "Small Image Field";
  modal.desc.innerHTML = 'Name and Tooltip of the image for the small profile artwork. The name must be the same as the one uploaded to the <strong>Rich Presence</strong> tab on your <strong>Developer Application</strong>.<br><br>To upload one, go to <strong>Discord Developers > Applications > Your Application > Rich Presence > Art Assets</strong>, and upload a <strong>Rich Presence Asset</strong>!';
  modal.screen.style.display = "block";
  setTimeout(function () {
    modal.screen.style.opacity = "100%";
    setTimeout(function () {
      modal.box.style.top = "30px";
    }, 100);
  }, 100);
});
helpModals.button.addEventListener('click', function () {
  modal.header.innerText = "Button Field";
  modal.desc.innerHTML = 'Text and Link redirect for the presence button.';
  modal.screen.style.display = "block";
  setTimeout(function () {
    modal.screen.style.opacity = "100%";
    setTimeout(function () {
      modal.box.style.top = "30px";
    }, 100);
  }, 100);
});