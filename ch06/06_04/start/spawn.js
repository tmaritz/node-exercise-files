const cp = require('child_process');
const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Toby \n");
questionApp.stdin.write("Bris \n");
questionApp.stdin.write("Code \n");

questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
    console.log(`questioApp process exited`);
});