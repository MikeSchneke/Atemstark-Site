// Make CMS noisy if something fails
window.CMS_DEBUG = true;
// We'll initialize manually after the bundle loads
window.CMS_MANUAL_INIT = true;

(function init() {
  if (!window.CMS) {
    // Wait until the CMS bundle loads
    return setTimeout(init, 50);
  }

  window.CMS.init({
    config: {
      backend: {
        name: "github",
        repo: "MikeSchneke/Atemstark-Site",
        branch: "main",
        auth_type: "implicit",
        client_id: "Ov23liuJvdVjUw4h9bSr" // your GitHub OAuth App Client ID
      },
      media_folder: "assets/img/uploads",
      public_folder: "/assets/img/uploads",
      collections: [
        {
          name: "pages",
          label: "Pages",
          files: [
            {
              label: "Homepage (DE)",
              name: "index_de",
              file: "index.html",
              editor: { preview: false },
              fields: [
                { label: "HTML", name: "body", widget: "code", default_language: "html" }
              ]
            },
            {
              label: "Homepage (EN)",
              name: "index_en",
              file: "en/index.html",
              editor: { preview: false },
              fields: [
                { label: "HTML", name: "body", widget: "code", default_language: "html" }
              ]
            }
          ]
        }
      ]
    }
  });
})();
