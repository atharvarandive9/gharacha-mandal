export default function handler(req, res) {
  const title = "🌺 घरचा मंडळ | गणपती आगमन 2026";

  const description =
    "🙏 सस्नेह आमंत्रण — घरचा मंडळ गणपती आगमन 2026. गणपती बाप्पा मोरया!";

  const image =
    "https://gharacha-mandal-1.vercel.app/imges/ganpati.png";

  const url =
    "https://gharacha-mandal-1.vercel.app/invitation";

  const html = `
<!doctype html>
<html lang="mr">
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>${title}</title>

  <meta
    name="description"
    content="${description}"
  >

  <!-- Open Graph -->
  <meta
    property="og:title"
    content="${title}"
  >

  <meta
    property="og:description"
    content="${description}"
  >

  <meta
    property="og:image"
    content="${image}"
  >

  <meta
    property="og:image:alt"
    content="घरचा मंडळ गणपती आगमन 2026"
  >

  <meta
    property="og:type"
    content="website"
  >

  <meta
    property="og:url"
    content="${url}"
  >

  <meta
    property="og:site_name"
    content="घरचा मंडळ"
  >

  <!-- Twitter / X -->
  <meta
    name="twitter:card"
    content="summary_large_image"
  >

  <meta
    name="twitter:title"
    content="${title}"
  >

  <meta
    name="twitter:description"
    content="${description}"
  >

  <meta
    name="twitter:image"
    content="${image}"
  >
</head>

<body>

  <p style="text-align:center;">
    गणपती बाप्पा मोरया! 🙏
  </p>

  <script>
    window.location.replace("/invitation-app");
  </script>

</body>
</html>
`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(html);
}