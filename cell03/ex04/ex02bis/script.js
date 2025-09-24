$(function () {
  $('#calcForm').on('submit', function (e) {
    e.preventDefault(); 

    const left = $('#left').val();
    const right = $('#right').val();
    const op = $('#op').val();

    const a = parseInt(left, 10);
    const b = parseInt(right, 10);

    if (isNaN(a) || isNaN(b) || a < 0 || b < 0) {
      alert("Error :(");
      return;
    }

    let result;

    if ((op === '/' || op === '%') && b === 0) {
      console.log("It's over 9000!");
      alert("It's over 9000!");
      return;
    }

    switch (op) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/': result = a / b; break;
      case '%': result = a % b; break;
    }

    console.log(result);
    alert(result);
  });

  setInterval(() => {
    alert("Please, use me...");
  }, 30000);
});
