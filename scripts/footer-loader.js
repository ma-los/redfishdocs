var observer = new MutationObserver(function () {
  if (document.body) {
    const footerElement = document.createElement("footer");
    footerElement.innerHTML +=
      "<div style=' font-size: 18px; line-height: 24px; background-color: #ffffff; color: #444444; box-sizing: border-box; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; ' > <div style=' font-size: 18px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; box-sizing: border-box; max-width: 100%; background-color: #e5e5e5; color: #444444; min-width: 0; min-height: 0; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding-left: 24px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; ' > <div style=' display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; box-sizing: border-box; margin-top: 12px; margin-bottom: 12px; min-width: 0; min-height: 0; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-flex-basis: 768px; -ms-flex-preferred-size: 768px; flex-basis: 768px; ' > <span>© 2020 Hewlett Packard Enterprise Development LP</span> </div> <div style=' display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; box-sizing: border-box; max-width: 100%; margin-top: 12px; margin-bottom: 12px; -webkit-align-items: center; -webkit-box-align: center; -ms-flex-align: center; align-items: center; min-width: 0; min-height: 0; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; ' > <a style=' padding-right: 10px; box-sizing: border-box; font-size: 14px; line-height: 20px; color: #333333; font-weight: normal; -webkit-text-decoration: none; text-decoration: none; cursor: pointer; ' target='_external' href='https://www.hpe.com/us/en/legal/privacy.html' >Privacy</a > <div></div> | <div></div> <a style=' padding-left: 10px; padding-right: 10px; box-sizing: border-box; font-size: 14px; line-height: 20px; color: #333333; font-weight: normal; -webkit-text-decoration: none; text-decoration: none; cursor: pointer; ' target='_external' href='https://www.hpe.com/us/en/about/legal/terms-of-use.html' >Terms of Use</a > <div></div> | <div></div> <a style=' padding-left: 10px; padding-right: 10px; box-sizing: border-box; font-size: 14px; line-height: 20px; color: #333333; font-weight: normal; -webkit-text-decoration: none; text-decoration: none; cursor: pointer; ' target='_external' href='https://www.hpe.com/us/en/legal/privacy.html#datacollection' >Add Choices &amp; Cookies</a > <div class='StyledBox__StyledBoxGap-sc-13pk1d4-1 cKcboG'></div> | <div class='StyledBox__StyledBoxGap-sc-13pk1d4-1 cKcboG'></div> <a style=' padding-left: 10px; box-sizing: border-box; font-size: 14px; line-height: 20px; color: #333333; font-weight: normal; -webkit-text-decoration: none; text-decoration: none; cursor: pointer; ' target='_external' href='https://www.hpe.com/us/en/privacy/personal-information.html' >Do Not Sell My Personal Information</a > </div> </div> </div>";

    document.body.append(footerElement);

    observer.disconnect();
  }
});
observer.observe(document.documentElement, { childList: true, subtree: true });

