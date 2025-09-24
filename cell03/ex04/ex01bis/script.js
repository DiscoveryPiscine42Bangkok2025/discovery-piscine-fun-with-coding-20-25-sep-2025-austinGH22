<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Exercise 01bis – Explode this balloon</title>
  <style>
    html, body { height: 100%; margin: 0; }
    body { display: grid; place-items: center; background: #f6f6f6; font-family: system-ui, sans-serif; }

    #balloon {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: red;
      cursor: pointer;
      box-shadow: 0 10px 30px rgba(0,0,0,.12) inset,
                  0 6px 18px rgba(0,0,0,.08);
      transition: width .08s ease, height .08s ease, background-color .08s ease;
      user-select: none;
    }

    .hint { position: fixed; bottom: 14px; color:#666; font-size: 14px; }
  </style>
</head>
<body>
  <div id="balloon" aria-label="Balloon"></div>
  <div class="hint">Click = +10px &amp; สีเดินหน้า • Mouse leave = −5px &amp; สีถอยหลัง • ระเบิดเมื่อ &gt; 420px</div>

  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
