"use strict";

window.addEventListener('load', function (e) {
  eel.readCache()(function (cache) {
    if (cache.client) {
      inputFields.client.value = cache.client;
    }

    if (cache.state) {
      inputFields.state.value = cache.state;
    }

    if (cache.details) {
      inputFields.details.value = cache.details;
    }

    if (cache.large_image) {
      inputFields.largeImgName.value = cache.large_image;
    }

    if (cache.large_text) {
      inputFields.largeImgTooltip.value = cache.large_text;
    }

    if (cache.small_image) {
      inputFields.smallImgName.value = cache.small_image;
    }

    if (cache.small_text) {
      inputFields.smallImgTooltip.value = cache.small_text;
    }

    if (cache.buttons[0]) {
      var button = cache.buttons[0];

      if (button.label) {
        inputFields.buttonLabel.value = button.label;
      }

      if (button.url) {
        inputFields.buttonLink.value = button.url;
      }
    }
  });
});